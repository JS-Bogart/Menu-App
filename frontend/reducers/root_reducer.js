import { combineReducers } from 'redux';
import menuItemsReducer from './menu_items_reducer';
import listsReducer from './lists_reducer';

export default combineReducers({
  menuItems: menuItemsReducer,
  lists: listsReducer
});