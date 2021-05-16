import { UPDATE_LOGGED_IN_STATUS, SET_ACCESS_TOKEN } from "./actionTypes";

export function updateLoggedInStatus(payload) {
  return { type: UPDATE_LOGGED_IN_STATUS, payload }
};

export function setAccessToken(payload) {
  return { type: SET_ACCESS_TOKEN, payload }
};