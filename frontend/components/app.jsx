import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
//Containers:
import SplashContainer from './splash/splash_container';
import ItemListsContainer from './item_lists/item_lists_container';
import ListContainer from './list/list_container';
import EditListContainer from './edit_list/edit_list_container';


const App = () => (
  <div className="app">
    <Switch>     
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/lists" component={ItemListsContainer} />
      <Route exact path="/lists/:id" component={ListContainer} />
      <Route exact path="/lists/edit/:id" component={EditListContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;