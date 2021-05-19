import axios from "axios";
import { me_endpoint } from "../../config";
import store from "../../store";
import { updateUserPlaylists } from "../../store/actions";

export const getMyPlaylists = async (offset = 0) => {
  const playlistsEndpoint = `${me_endpoint}/playlists`;
  axios
    .get(playlistsEndpoint, {
      headers: {
        Authorization: "Bearer " + store.getState().accessToken,
      },
      params: {
        limit: 40,
        offset: offset,
      },
    })
    .then((res) => {
      store.dispatch(updateUserPlaylists(res.data.items));
      return res.data;
    });
};

export const playPlaylist = async (id) => {
  axios
    .put("http://localhost:3001/playSong", {
      headers: {
        Authorization: "Bearer " + store.getState().accessToken,
      },
      context_uri: `spotify:playlist:${id}`,
      offset: 0,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.log(e));
};
