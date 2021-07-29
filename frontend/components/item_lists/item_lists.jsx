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
        key={list.id}
        onClick={() => handleClick(list.id)}
      >
        {list.name}
      </li>
    ))

    setItemLists(listsArray);
  }

  return(
    <div>
      <Navbar />
      <div>
        <div className="list-creator">
          <p>Create a new List</p>
          <div>
            <p>List Name</p>
            <input 
              type="text"
              value={listName}
              onChange={handleInput()}
            />
            <p onClick={() => handleSubmit()}>Create</p>
          </div>
        </div>
        <div className="lists-list">
          <p>Lists</p>
          <ul>
            {itemLists}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ItemLists