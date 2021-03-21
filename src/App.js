import './App.css';
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import Bg from './images/Bg.png';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

export const UserContext = createContext();

function App() {

  const [newUser, setNewUser] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    password2 : '',
    photo: ''
  });
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''
  });
const [facebookUser, setFacebookUser] = useState({
   isSignedIn: false,
    name: '',
    email: '',
    photo: ''
});
  return (
    <div  style = {
      {backgroundImage: `url(${Bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }}>
    <UserContext.Provider value = {{ value:[registeredUser, setRegisteredUser] , value2:[loggedInUser, setLoggedInUser], value3: [facebookUser, setFacebookUser] , value4: [newUser, setNewUser]}}>
    <Router>
   <div>
     <Switch>
       <Route exact path="/">
       <HomePage></HomePage>
       </Route>
       <Route  path="/home">
       <HomePage></HomePage>
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <PrivateRoute path="/destination">
         <Destination />
       </PrivateRoute>
       <PrivateRoute path="/blog">
         <Blog />
       </PrivateRoute>
       <PrivateRoute path="/contact">
         <Contact />
       </PrivateRoute>
     </Switch>
   </div>
 </Router>
    </UserContext.Provider>

  </div>

);

  };

  

export default App;
