import axios from 'axios';
import { me_endpoint } from '../../config';
import store from '../../store';
import { updateUserPlaylists } from '../../store/actions';

export const getMyPlaylists = async (offset) => {
  const playlistsEndpoint = `${me_endpoint}/playlists`;
  axios.get(
    playlistsEndpoint,
    {
      headers: {
        Authorization: 'Bearer ' + store.getState().accessToken,
      },
      limit: 20,
      offset: 0,
    }
  ).then(
    res => { 
      store.dispatch(updateUserPlaylists(res.data.items))
      return res.data }
  );
}