import React from 'react';
import Uploader from './uploader';
import MenuList from './menuList';
import Navbar from '../navbar';

const Splash = (props) => {

  return(
    <div className="splash">
      <Navbar />
      <Uploader requestMenuItems={props.requestMenuItems} />
      <MenuList 
        menuItems={props.menuItems}
        requestMenuItems={props.requestMenuItems}
      />
    </div>
  )
}

export default Splash;