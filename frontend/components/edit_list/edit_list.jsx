import React, { useState, useEffect } from 'react';

const EditList = (props) => {

  const [currentList, setCurrentList] = useState({});
  const [currentListId, setCurrentListId] = useState(null);
  const [currentListItems, setCurrentListItems] = useState([]);
  const [editItems, setEditItems] = useState([]);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  // const [itemsLoaded, setItemsLoaded] = useState(false);
  
  useEffect(async () => {
    const { id } = props.match.params;
    const listId = parseInt(id);
    if (!resourcesLoaded) {
      if (props.menuItems.length === 0) {
        await props.requestMenuItems();
      }
      if (props.lists.length === 0) {
        await props.requestItemLists();
      }
      await props.requestListItems(listId);
      setCurrentListId(listId);
      setResourcesLoaded(true);
    } else if (Object.keys(currentList).length === 0) {
      props.lists.forEach(list => {
        if (list.id === currentListId) {
          setCurrentList(list);
          setCurrentListItems(list.items);
        }
      })
    } else if (resourcesLoaded) {
      getItems();  
      // setItemsLoaded(true);
    }
  }, [props.lists, currentListItems])

  const updateListRemove = (itemId) => {
    const newList = [];
    currentListItems.forEach(item => {
      if (item.id !== itemId) {
        newList.push(item);
      }
    })
    setCurrentListItems(newList);
  }

  const updateListAdd = (item) => {
    const newList = [];
    currentListItems.forEach(item => {newList.push(item)})
    newList.push(item);
    setCurrentListItems(newList);
  }

  const removeFromList = async (listId, itemId) => {
    const listItem = { list_id: listId, menu_item_id: itemId }
    await props.removeItem(listItem);
    updateListRemove(itemId);
  }

  const addToList = async (listId, item) => {
    const listItem = { list_item: {list_id: listId, menu_item_id: item.id} }
    await props.addItem(listItem, item)
    // getItems();
    updateListAdd(item);
  }

  const getItems = () => {
    const newItems = [];
    const idChecker = currentListItems.map(item => item.id)
    props.menuItems.forEach(item => {
      if (idChecker.includes(item.id)) {
        newItems.push(
          <li key={item.id}>
            <div>
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
            <div
              className="add-remove-button"
              onClick={() => removeFromList(currentList.id, item.id)}
            >
              <p>-</p>
            </div>
          </li>
        )
      } else {
        newItems.push(
          <li key={item.id}>
            <div>
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
            <div
              className="add-remove-button"
              onClick={() => addToList(currentList.id, item)}
            >
              <p>+</p>
            </div>
          </li>
        )
      }
    })
    setEditItems(newItems);
  }

  const returnButton = () => {
    props.history.push(`/lists/${currentList.id}`);
  }

  return(
    <div>
      <div>
        <p>Edit List</p>
        <div
          className="list-return-button"
          onClick={() => returnButton()}
        >
          <p>Return to List</p>
        </div>
      </div>
      {editItems}
    </div>
  )
}

export default EditList;