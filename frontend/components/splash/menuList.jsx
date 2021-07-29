import React, { useState, useEffect } from 'react';
import Category from './category';

const MenuList = (props) => {

  const [menuCategories, setMenuCategories] = useState(
    <p>No menu items have been added.</p>
  );
  const categoryList = ["Appetizers", "Salads", "Pasta", "Sides", "Desserts"];

  useEffect(() => {
    if (props.menuItems.length < 1) {
      props.requestMenuItems();
    }
    if (props.menuItems.length > 0) {
      const newItems = props.menuItems.map(item => item)
      getCategories(newItems);
    }
  }, [props.menuItems])

  const getCategories = (items) => {
    const categories = <div>
      {categoryList.map((category, index) => (
        <Category key={index} category={category} menuItems={items} />
      ))}
    </div>
    
    setMenuCategories(categories);
  }

  return(
    <ul>
      {menuCategories}
    </ul>
  )
}

export default MenuList;