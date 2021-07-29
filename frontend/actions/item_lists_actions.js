import * as APIUtil from '../util/lists_util';

export const RECIEVE_ITEM_LISTS = "RECIEVE_ITEM_LISTS";
export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

const recieveItemLists = itemLists => ({
  type: RECIEVE_ITEM_LISTS,
  itemLists
})

const createList = list => ({
  type: ADD_LIST,
  list
})

const deleteList = list => ({
  type: REMOVE_LIST,
  list
})

export const requestItemLists = () => dispatch => {
  return APIUtil.fetchLists()
    .then(itemLists => dispatch(recieveItemLists(itemLists)))
}

export const addList = list => dispatch => {
  return APIUtil.createList(list)
    .then(list => dispatch(createList(list)))
}

export const removeList = list => {
  return APIUtil.deleteList(list)
    .then(list => dispatch(deleteList(list)))
}