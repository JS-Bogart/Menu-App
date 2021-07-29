import React, { useState, useEffect } from 'react';

const Category = (props) => {

  const [items, setItems] = useState(null);

  useEffect(() => {
    if (!items) {
      getItems();
    }
  }, [items])

  const getItems = () => {
    const newItems = [];
    props.menuItems.forEach(item => {
      if (item.category === props.category) {
        newItems.push(item);
      }
    })
    const itemList = <ul>
      {newItems.map(item => (
        <li key={item.id}>
          <p className="name">{item.name}</p>
          <p className="description">{item.description}</p>
        </li>
      ))}
    </ul>
    setItems(itemList);
  }

  return(
    <div>
      <p className="category">{props.category}</p>
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default Category;