import { connect } from 'react-redux';
import { requestItemLists, addList } from '../../actions/item_lists_actions';
import ItemLists from './item_lists';

const mapStateToProps = state => {
  return {
    lists: Object.values(state.lists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestItemLists: () => dispatch(requestItemLists()),
    addList: (list) => dispatch(addList(list)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemLists);