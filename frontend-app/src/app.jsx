import React, { Component } from 'react';
import firebaseConfig  from './config/firebaseConfig';
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';


function App({children}){
  return (
    <Container>
      {children}
    </Container>
  )
}

export default App;