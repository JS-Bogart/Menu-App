import { combineReducers } from 'redux';
import menuItemsReducer from './menu_items_reducer';

export default combineReducers({
  menuItems: menuItemsReducer
});