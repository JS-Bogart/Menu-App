import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
//Containers:
import SplashContainer from './splash/splash_container';


const App = () => (
  <div className="app">
    <Switch>     
      <Route exact path="/" component={SplashContainer} />
      {/* <Route exact path="/list/:id" component={ListContainer} /> */}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;