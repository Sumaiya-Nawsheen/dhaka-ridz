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

export const UserContext = createContext();

function App() {

  
  
  const [loggedInUser, setLoggedInUser] = useState({});
const [facebookUser, setFacebookUser] = useState({});
  return (
    <div  style = {
      {backgroundImage: `url(${Bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }}>
    <UserContext.Provider value = {{ value:[loggedInUser, setLoggedInUser], value2: [facebookUser, setFacebookUser]}}>
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
       <Route path="/destination">
         <Destination />
       </Route>
     </Switch>
   </div>
 </Router>
    </UserContext.Provider>

  </div>

);

  };

  

export default App;
