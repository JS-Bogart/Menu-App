import { RECIEVE_MENU_ITEMS } from '../actions/menu_items_actions';

const menuItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_MENU_ITEMS:
      return Object.assign({}, action.menuItems, state)
    default:
      return state;
  }
}

export default menuItemsReducer;