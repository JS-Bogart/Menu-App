import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';

const List = (props) => {

  const [list, setList] = useState([]);
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
    } else if (list.length < 1) {
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
      <li key={item.id}>
        <p>{item.name}</p>
        <p>{item.description}</p>
      </li>
    ))
    setListItems(newItems);
  }

  return(
    <div>
      <Navbar />
      {list ? <p>{list.name}</p> : null}
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default List;