import { RECIEVE_ITEM_LISTS, ADD_LIST, REMOVE_LIST } from "../actions/item_lists_actions";

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECIEVE_ITEM_LISTS:
      return Object.assign({}, action.itemLists, state)
    case ADD_LIST:
      nextState[action.list.id] = action.list;
      return nextState;
    case REMOVE_LIST:
      delete nextState[action.list.id];
      return nextState;
    default:
      return state;
  }
}

export default listsReducer;