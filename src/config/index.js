import querystring from "query-string";

export const base_api_url = 'https://api.spotify.com/v1';
export const base_auth_url = 'https://accounts.spotify.com/authorize?';
export const token_url = 'https://accounts.spotify.com/api/token';
export const me_endpoint = 'https://api.spotify.com/v1/me';
export const playlists_endpoint = 'https://api.spotify.com/v1/playlists';
export const client_id = '';
export const client_secret = '';
export const redirect_uri = 'http://localhost:3000/';
export const scope = 
  'user-read-private user-read-email user-read-recently-played user-top-read playlist-read-private playlist-read-collaborative user-library-read user-modify-playback-state user-read-playback-state streaming';
export const full_auth_url =
    base_auth_url +
    querystring.stringify({
      response_type: "token",
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
    });