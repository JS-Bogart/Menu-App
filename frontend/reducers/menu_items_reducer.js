import { RECIEVE_MENU_ITEMS } from '../actions/menu_items_actions';

const menuItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  // const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECIEVE_MENU_ITEMS:
      return Object.assign({}, action.menuItems, state)
    // case RECEIVE_menuItems:
    //   nextState[action.menuItems.id] = action.menuItems;
    //   return nextState;
    default:
      return state;
  }
}

export default menuItemsReducer;