import { SET_ACCESS_TOKEN, SET_USER, UPDATE_LOGGED_IN_STATUS, UPDATE_USER_PLAYLISTS, UPDATE_TOP_TRACKS } from "./actionTypes";

export function setUser(payload) {
  return { type: SET_USER, payload }
};

export function updateLoggedInStatus(payload) {
  return { type: UPDATE_LOGGED_IN_STATUS, payload }
};

export function setAccessToken(payload) {
  return { type: SET_ACCESS_TOKEN, payload }
};

export function updateUserPlaylists(payload) {
  return { type: UPDATE_USER_PLAYLISTS, payload }
};

export function updateTopTracks(payload) {
  return { type: UPDATE_TOP_TRACKS, payload }
};

