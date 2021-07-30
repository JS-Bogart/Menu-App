import { connect } from 'react-redux';
import { 
  requestItemLists, 
  requestListItems, 
  removeItemList,
  addItem,
  removeItem
} from '../../actions/item_lists_actions';
import List from './list';

const mapStateToProps = state => {
  return {
    lists: Object.values(state.lists),
    menuItems: Object.values(state.menuItems)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestItemLists: () => dispatch(requestItemLists()),
    requestListItems: (listId) => dispatch(requestListItems(listId)),
    removeItemList: (list) => dispatch(removeItemList(list)),
    addItem: (listItem, itemData) => dispatch(addItem(listItem, itemData)),
    removeItem: (listItem) => dispatch(removeItem(listItem))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);