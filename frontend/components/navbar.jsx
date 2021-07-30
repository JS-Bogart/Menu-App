import React from 'react';
import { useHistory } from "react-router-dom";

const Navbar = () => {

  const history = useHistory();

  const handleClick = (url) => {
    if (history.location.pathname !== url) {
      history.push(url)
    }
  }

  return(
    <div className="navbar">
      <div 
        className="navbar-button"
        onClick={() => handleClick("/")}
      >
        <p>Menu Items</p>
      </div>
      <div 
        className="navbar-button"
        onClick={() => handleClick("/lists")}
      >
        <p>Lists</p>
      </div>
    </div>
  )
}

export default Navbar;