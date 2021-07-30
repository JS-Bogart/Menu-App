import { 
  RECIEVE_ITEM_LISTS, 
  RECIEVE_LIST_ITEMS, 
  ADD_LIST, 
  REMOVE_LIST,
  ADD_ITEM,
  REMOVE_ITEM
} from "../actions/item_lists_actions";

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
    case RECIEVE_LIST_ITEMS:
      const items = Object.values(action.listItems);
      nextState[action.listId]["items"] = items;
      return nextState;
    case ADD_ITEM:
      nextState[action.item.list_id]["items"].push(action.itemData);
      return nextState;
    case REMOVE_ITEM:
      delete nextState[action.item.list_id]["items"][action.item.menu_item_id];
      return nextState;
    default:
      return state;
  }
}

export default listsReducer;