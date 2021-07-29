import * as APIUtil from '../util/menu_item_util';

export const RECIEVE_MENU_ITEMS = "RECIEVE_MENU_ITEMS";

const receiveMenuItems = menuItems => ({
  type: RECIEVE_MENU_ITEMS,
  menuItems
})

export const requestMenuItems = () => dispatch => {
  return APIUtil.fetchMenuItems()
    .then(menuItems => dispatch(receiveMenuItems(menuItems)))
}