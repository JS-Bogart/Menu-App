import { connect } from 'react-redux';
import { requestItemLists, requestListItems, removeList } from '../../actions/item_lists_actions';
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
    removeList: (list) => dispatch(removeList(list)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);