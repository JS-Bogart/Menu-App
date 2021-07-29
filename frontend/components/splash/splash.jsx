import React, { useState, useEffect } from 'react';
import Uploader from './uploader';
import MenuList from './menuList';
import Navbar from '../navbar';

const Splash = (props) => {

  return(
    <div>
      <Navbar />
      <Uploader />
      <MenuList 
        menuItems={props.menuItems}
        requestMenuItems={props.requestMenuItems}
      />
    </div>
  )
}

export default Splash;