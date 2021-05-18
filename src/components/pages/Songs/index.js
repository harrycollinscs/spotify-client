import { connect } from 'react-redux';
import store from '../../../store';
import Songs from '../../templates/Songs';

const mapStateToProps = () => ({
  userTopTracks: store.getState().userTopTracks,
});

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps)(Songs);
