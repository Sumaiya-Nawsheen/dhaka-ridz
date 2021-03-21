import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Login.css'
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

if (firebase.apps.length === 0) { firebase.initializeApp(firebaseConfig); }
const Login = () => {

    const { value, value2, value3, value4 } = useContext(UserContext);
    const [registeredUser, setRegisteredUser] = value;
    const [loggedInUser, setLoggedInUser] = value2;
    const [facebookUser, setFacebookUser] = value3;
    const [newUser, setNewUser] = value4;

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (e) => {

        if (newUser && registeredUser.email && registeredUser.password) {
            firebase.auth().createUserWithEmailAndPassword(registeredUser.email, registeredUser.password)
                .then(res => {
                    const newUserInfo = { ...registeredUser };
                    const signedUser = {
                        name: registeredUser.name,
                        email: registeredUser.email,
                        password: registeredUser.password
                    };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    setRegisteredUser(newUserInfo, signedUser);
                    console.log(registeredUser)
                    updateUserName(registeredUser.name);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...registeredUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setRegisteredUser(newUserInfo);
                });
        }

        if (!newUser && registeredUser.email && registeredUser.password) {
            firebase.auth().signInWithEmailAndPassword(registeredUser.email, registeredUser.password)
                .then(res => {
                    const newUserInfo = { ...registeredUser };
                    const signedUser = {
                        name: registeredUser.name,
                        email: registeredUser.email,
                        password: registeredUser.password
                    };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    setRegisteredUser(newUserInfo, signedUser);
                    history.replace(from);
                    console.log('sign in user info', registeredUser);
                })
                .catch(function (error) {
                    const newUserInfo = { ...registeredUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setRegisteredUser(newUserInfo);
                });
        }
    }


    const handleBlur = (event) => {
        console.log(event.target.value);
        const newUser = { ...registeredUser };
        newUser[event.target.name] = event.target.value;
        setRegisteredUser(newUser);
    }


    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            userName: name
        }).then(function () {
            console.log('user name updated successfully')
        }).catch(function (error) {
            console.log(error)
        });
    }



    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signedUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setLoggedInUser(signedUser)
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    const handleFacebookSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                // The signed-in user info.
                const { displayName, photoURL, email } = result.user;
                const signedUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setFacebookUser(signedUser)
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }


    return (
        <div>
            <NavBar></NavBar>

            {/* Register with email & password */}
            

            <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <h3> {newUser ? 'Create an account' : 'Login'}</h3>

                {
                    newUser && <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <input placeholder="Name" type="text" onBlur={handleBlur} id="formBasicEmail" className="form-control" name="name" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                    </Form.Group>
                }

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username or Email</Form.Label>
                    <input placeholder="Enter email" onBlur={handleBlur} type="email" id="formBasicEmail" className="form-control" name="email" ref={register({ required: true })} />
                    {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <input placeholder="Password" onBlur={handleBlur} type="password" id="formBasicPassword1" className="form-control" name="password" ref={register({
                        required: true,
                        validate: {
                            minLength: (value) => value.length > 6,
                            maxLength: (value) => value.length < 16,
                            pattern: (value) => /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value) === true
                        }
                    })} />
                    {errors.password?.type === "minLength" && <span style={{ color: 'red' }}>Password is required more than 6 characters</span>}
                    {errors.password?.type === "maxLength" && <span style={{ color: 'red' }}>Password is required less then 16 characters</span>}
                    {errors.password?.type === "pattern" && <span style={{ color: 'red' }}>Pattern doesn't match </span>}
                </Form.Group>

                {newUser && <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <input placeholder="Password" onBlur={handleBlur} type="password" id="formBasicPassword2" className="form-control" name="confirmPassword" ref={register({ required: true })} />
                    {errors.password?.type === "required" && <span style={{ color: 'red' }}>Password is required</span>}
                </Form.Group>
                }


                <input style={{ width: "100%", textAlign: "center" }} type="submit" value={newUser ? "Create an account" : 'Sign in'} />

                {/* <div><span> Haven't sign up yet? </span><Link to="/login">Login</Link></div> */}

                <div className="mt-3" style={{ textAlign: "center" }}>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">Haven't sign up yet? Click on checkbox.</label>
            </div>

            </Form>


            <p style={{ color: 'red', textAlign: "center" }}>{registeredUser.error}</p>
            { registeredUser.success && <p style={{ color: 'green', textAlign: "center" }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}


            {/* google, facebook sign in */}
            <div className="mt-3" style={{ textAlign: "center" }}>
                <p> __________________________________ or _____________________________________</p>
                <button onClick={handleGoogleSignIn}>Continue with Google</button>
                <br />
                <button className="mt-3" onClick={handleFacebookSignIn}>Continue with Facebook</button>
            </div>
        </div>
    );

};

export default Login;