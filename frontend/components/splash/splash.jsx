import React, { useState, useEffect } from 'react';
import Uploader from './uploader';

const Splash = (props) => {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    if (props.menuItems.length < 1) {
      props.requestMenuItems();
    }
    if (props.menuItems.length > 0) {
      const newItems = <ul>
        {props.menuItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>;
      setMenuItems(newItems);
    }
  }, [props.menuItems])

  return(
    <div>
      <Uploader />
      <ul>
        {menuItems}
      </ul>
    </div>
  )
}

export default Splash;