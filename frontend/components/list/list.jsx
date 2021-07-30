import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';

const List = (props) => {

  const [list, setList] = useState({});
  const [listItems, setListItems] = useState(
    <li>No items have been added to this list.</li>
  );
  const [itemsRequested, setItemsRequested] = useState(false);

  useEffect(async () => {
    const { id } = props.match.params;
    const currentListId = parseInt(id);
    if (props.lists.length < 1) {
      await props.requestItemLists();
      setItemsRequested(true);
    } else if (!itemsRequested) {
      await props.requestListItems(currentListId);
      setItemsRequested(true);
    } else if (Object.keys(list).length === 0) {
      props.lists.forEach(list => {
        if (list.id === currentListId) {
          setList(list);
        }
      })
    } else if (list.items.length) {
      getListItems();
    }
  }, [props.lists, list])

  const getListItems = () => {
    const newItems = list.items.map(item => (
      <li 
        className="list-item"
        key={item.id}
      >
        <p className="list-item-name">{item.name}</p>
        <p className="list-item-description">{item.description}</p>
      </li>
    ))
    setListItems(newItems);
  }

  const deleteList = () => {
    props.removeItemList(list);
    props.history.push("/lists");
  }

  const editList = () => {
    props.history.push(`/lists/edit/${list.id}`);
  }

  return(
    <div className="list-items-page">
      <Navbar />
      {list ? 
        <div className="list-items-header">
          <p className="list-items-title">{list.name}</p>
          <div className="list-items-button-box">
            <div 
              className="item-list-button"
              onClick={() => deleteList()}
            >
              <p>Delete List</p>
            </div>
            <div
              className="item-list-button"
              onClick={() => editList()}
            >
              <p>Edit List</p>
            </div>
          </div>
        </div>
        : null
      }
      <ul className="list-items-list">
        {listItems}
      </ul>
    </div>
  )
}

export default List;