import { connect } from 'react-redux';
import {
  requestItemLists,
  requestListItems,
  addItem,
  removeItem
} from '../../actions/item_lists_actions';
import { requestMenuItems } from '../../actions/menu_items_actions';
import EditList from './edit_list';

const mapStateToProps = state => {
  return {
    lists: Object.values(state.lists),
    menuItems: Object.values(state.menuItems)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestItemLists: () => dispatch(requestItemLists()),
    requestMenuItems: () => dispatch(requestMenuItems()),
    requestListItems: (listId) => dispatch(requestListItems(listId)),
    addItem: (listItem, itemData) => dispatch(addItem(listItem, itemData)),
    removeItem: (listItem) => dispatch(removeItem(listItem))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditList);