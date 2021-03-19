import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Login.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

if (firebase.apps.length ===0 ){firebase.initializeApp(firebaseConfig);}
const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    const { value, value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [facebookUser, setFacebookUser] = value2;

const handleGoogleSignIn =() => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    var user = result.user;
    setLoggedInUser(user)
    })
    .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

const handleFacebookSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

   setFacebookUser(user)
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });

}
 
    return (
        <div>
     <NavBar></NavBar>

     {/* Register with email & password */}
     <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
         <h3> Create an account</h3>

         <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <input placeholder="Name" type="text" id="formBasicEmail" className="form-control" name="name" ref={register({ required: true })}/>
    {errors.name && <span style={{color: 'red'}}>Name is required</span>}
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username or Email</Form.Label>
    <input placeholder="Enter email" type="email" id="formBasicEmail" className="form-control" name="email" ref={register({ required: true })}/>
    {errors.email && <span style={{color: 'red'}}>Email is required</span>}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <input placeholder="Password" type="password" id="formBasicPassword" className="form-control" name="password" ref={register({ required: true })}/>
    {errors.password && <span style={{color: 'red'}}>Password is required</span>}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <input placeholder="Password" type="password" id="formBasicPassword" className="form-control" name="password" ref={register({ required: true })}/>
    {errors.password && <span style={{color: 'red'}}>Password is required</span>}
  </Form.Group>

  <Button variant="primary" style={{width:"100%", textAlign:"center"}} type="submit">
   Create an account
  </Button>

  <div>Already has an account? <Link to="/loginIn">Login</Link></div>
</Form>

{/* google sign in */}
<div className = "mt-3" style={{textAlign:"center"}}>
    <p> __________________________________ or _____________________________________</p>
    <button onClick= {handleGoogleSignIn}>Continue with Google</button>
    <h2>Name: {loggedInUser.displayName}</h2>
            <h3>Email: {loggedInUser.email} </h3>
            <img src={loggedInUser.photoURL} alt=""/>

            <button onClick= {handleFacebookSignIn}>Continue with Facebook</button>
            <h2>Name: {facebookUser.displayName}</h2>
            <h3>Email: {facebookUser.email} </h3>
            <img src={facebookUser.photoURL} alt=""/>

</div>
        </div>
    );
};




export default Login;