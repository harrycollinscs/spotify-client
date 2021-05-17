import { connect } from 'react-redux';
import Home from '../../templates/Home';
import store from '../../../store';
import { updateLoggedInStatus } from '../../../store/actions';

const mapStateToProps = () => ({
  isLoggedIn: store.getState().isLoggedIn,
  user: store.getState().user,
});

const mapDispatchToProps = dispatch => ({
  updateLoggedInStatus:  isLoggedIn => dispatch(updateLoggedInStatus(isLoggedIn)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
