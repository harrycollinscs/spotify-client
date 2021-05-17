import { connect } from 'react-redux';
import store from '../../../store';
import Playlists from '../../templates/Playlists';

const mapStateToProps = () => ({
  userPlaylists: store.getState().userPlaylists,
});

const mapDispatchToProps = () => {
  
}

export default connect(mapStateToProps)(Playlists);
