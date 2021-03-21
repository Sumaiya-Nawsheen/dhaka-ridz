import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const { value, value2, value3 } = useContext(UserContext);
    const [registeredUser, setRegisteredUser] = value;
    const [loggedInUser, setLoggedInUser] = value2;
    const [facebookUser, setFacebookUser] = value3;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                registeredUser.email || loggedInUser.email || facebookUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
