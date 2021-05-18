import axios from 'axios';
import { me_endpoint } from '../../config';
import store from '../../store';
import { updateTopTracks } from '../../store/actions';

export const getMyTopTracks = async (offset) => {
  const topTracksEndpoint = `${me_endpoint}/top/tracks`;
  axios.get(
    topTracksEndpoint,
    {
      headers: {
        Authorization: 'Bearer ' + store.getState().accessToken,
      },
      limit: 20,
      offset: offset,
    }
  ).then(
    res => { 
      console.log(res.data.items)
      store.dispatch(updateTopTracks(res.data.items))
      return res.data 
    }
  );
}