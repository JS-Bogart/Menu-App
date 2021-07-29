import { connect } from 'react-redux';
import { requestMenuItems } from '../../actions/menu_items_actions';
import Splash from './splash'

const mapStateToProps = state => {
  return {
    menuItems: Object.values(state.menuItems)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestMenuItems: () => dispatch(requestMenuItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);