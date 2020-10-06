import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  

  const handleGoogleSignIn = () => {
    
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const {displayName, email} = result.user;
      const signedInUser = {name: displayName, email};
      setLoggedInUser(signedInUser);
      history.replace(from);
      
      // ...
    }).catch(function(error) {
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
      <h3>l</h3>
      <button onClick={handleGoogleSignIn} > Google Sign In</button>
    </div>
  );
};

export default Login;