import axios from "axios";
import { me_endpoint } from "../config";
import SpotifyWebApi from "spotify-web-api-js";
import {
  setAccessToken,
  setUser,
  updateLoggedInStatus,
} from "../store/actions";

export const getTokenFromHash = (key) => {
  const matches = window.location.hash.match(new RegExp(key + "=([^&]*)"));
  return matches ? matches[1] : null;
};

export const getUser = (store, token) => {
  // const Spotify = new SpotifyWebApi();
  // Spotify.setAccessToken(token);

  axios
    .get(me_endpoint, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      store.dispatch(setUser(res.data));
      return store.getState().user;
    })
    .catch((e) => console.log(e));
};

export const logIn = store => {
  const token = getTokenFromHash("access_token");
  window.location.hash = "";

  if(token) {
    store.dispatch(setAccessToken(token));
    store.dispatch(updateLoggedInStatus(true));
    getUser(store, token);
  }

};
