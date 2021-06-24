import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      
      
      <Redirect to='/'/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
