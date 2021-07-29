import React, { useState, useEffect } from 'react';
import Category from './category';

const MenuList = (props) => {

  const [menuCategories, setMenuCategories] = useState(
    <li>No menu items have been added.</li>
  );
  const categoryList = ["Appetizers", "Salads", "Pasta", "Sides", "Desserts"];

  useEffect(async () => {
    if (props.menuItems.length > 0) {
      const newItems = props.menuItems.map(item => item)
      getCategories(newItems);
    } else {
      await props.requestMenuItems();
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