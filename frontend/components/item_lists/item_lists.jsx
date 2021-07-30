import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';

const ItemLists = (props) => {

  const [listName, setListName] = useState('');
  const [itemLists, setItemLists] = useState(
    <li>No lists have been created.</li>
  );
  const [listsLoaded, setListsLoaded] = useState(false);

  useEffect(() => {
    if (props.lists.length < 1 && !listsLoaded) {
      props.requestItemLists();
      setListsLoaded(true);
    }
    const newLists = props.lists.map(list => list);
    getItemLists(newLists);
  }, [props.lists])

  const handleInput = () => {
    return (e) => {
      setListName(`${e.currentTarget.value}`)
    }
  }

  const handleSubmit = () => {
    props.addList({list: {name: listName}})
    setListName('');
  }

  const handleClick = listId => {
    props.history.push(`/lists/${listId}`)
  }

  const getItemLists = lists => {
    const listsArray = lists.map(list => (
      <li 
        className="item-list"
        key={list.id}
        onClick={() => handleClick(list.id)}
      >
        {list.name}
      </li>
    ))

    setItemLists(listsArray);
  }

  return(
    <div className="lists-page">
      <Navbar />
      <div>
        <div className="list-creator-box">
          <p className="list-page-title">Create a new List</p>
          <div className="list-creator">
            <div className="list-input-box">
              <p>List Name</p>
              <input 
                type="text"
                value={listName}
                onChange={handleInput()}
              />
            </div>
            <p 
              className="create-list-button"
              onClick={() => handleSubmit()}
            >
              Create
            </p>
          </div>
        </div>
        <ul className="lists-list">
          <li className="lists-title">Lists</li>
          {itemLists}
        </ul>
      </div>
    </div>
  )
}

export default ItemLists