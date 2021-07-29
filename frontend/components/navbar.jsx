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
    <div>
      <div 
        className="menu-items-button"
        onClick={() => handleClick("/")}
      >
        <p>Menu Items</p>
      </div>
      <div 
        className="lists-button"
        onClick={() => handleClick("/lists")}
      >
        <p>Lists</p>
      </div>
    </div>
  )
}

export default Navbar;