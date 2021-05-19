import axios from "axios";
import { me_endpoint } from "../../config";
import store from "../../store";
import { updateTopTracks } from "../../store/actions";

export const getMyTopTracks = async (offset) => {
  const topTracksEndpoint = `${me_endpoint}/top/tracks`;
  console.log("Getting top tracks");

  axios
    .get(topTracksEndpoint, {
      headers: {
        Authorization: "Bearer " + store.getState().accessToken,
      },
      limit: 30,
      offset: offset,
    })
    .then((res) => {
      store.dispatch(updateTopTracks(res.data.items));
      return res.data;
    });
};

export const playTrack = ({ type, id, offset }) => {
  axios
    .put("http://localhost:3001/playSong", {
      headers: {
        Authorization: "Bearer " + store.getState().accessToken,
      },
      context_uri: `spotify:${type}:${id}`,
      offset: offset,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.log(e));
};
