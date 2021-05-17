import { UPDATE_LOGGED_IN_STATUS, SET_ACCESS_TOKEN, SET_USER } from "./actionTypes";

export function setUser(payload) {
  return { type: SET_USER, payload }
};

export function updateLoggedInStatus(payload) {
  return { type: UPDATE_LOGGED_IN_STATUS, payload }
};

export function setAccessToken(payload) {
  return { type: SET_ACCESS_TOKEN, payload }
};