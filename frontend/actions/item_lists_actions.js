import * as APIUtil from '../util/lists_util';

export const RECIEVE_ITEM_LISTS = "RECIEVE_ITEM_LISTS";
export const RECIEVE_LIST_ITEMS = "RECIEVE_LIST_ITEMS";
export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const recieveItemLists = itemLists => ({
  type: RECIEVE_ITEM_LISTS,
  itemLists
})

const recieveListItems = (listItems, listId) => ({
  type: RECIEVE_LIST_ITEMS,
  listItems,
  listId
})

const createList = list => ({
  type: ADD_LIST,
  list
})

const removeList = list => ({
  type: REMOVE_LIST,
  list
})

const addItemToList = (item, itemData) => ({
  type: ADD_ITEM,
  item,
  itemData
})

const removeItemFromList = item => ({
  type: REMOVE_ITEM,
  item
})

export const requestItemLists = () => dispatch => {
  return APIUtil.fetchLists()
    .then(itemLists => dispatch(recieveItemLists(itemLists)))
}

export const requestListItems = listId => dispatch => {
  return APIUtil.fetchListItems(listId)
    .then(listItems => dispatch(recieveListItems(listItems, listId)))
}

export const addList = itemList => dispatch => {
  return APIUtil.createList(itemList)
    .then(list => dispatch(createList(list)))
}

export const removeItemList = itemList => dispatch => {
  return APIUtil.deleteList(itemList)
    .then(list => dispatch(removeList(list)))
}

export const addItem = (listItem, itemData) => dispatch => {
  return APIUtil.add(listItem)
    .then(item => dispatch(addItemToList(item, itemData)))
}

export const removeItem = listItem => dispatch => {
  return APIUtil.remove(listItem)
    .then(item => dispatch(removeItemFromList(item)))
}