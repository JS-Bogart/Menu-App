import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import "core-js/stable";
import "regenerator-runtime/runtime";
//Components
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  const store = configureStore();
  window.store = store; //Remove after all testing

  ReactDOM.render(<Root store={store} />, root);
});