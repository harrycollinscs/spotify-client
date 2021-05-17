import querystring from "query-string";

export const base_auth_url = 'https://accounts.spotify.com/authorize?';
export const token_url = 'https://accounts.spotify.com/api/token';
export const me_endpoint = 'https://api.spotify.com/v1/me';
export const client_id = 'a4f47b9ec311413bae51f77838af3e3d';
export const client_secret = 'f05017551a5f4161b2473802f971f172';
export const redirect_uri = 'http://localhost:3000/';
export const scope = 'user-read-private user-read-email user-read-recently-played user-top-read playlist-read-private playlist-read-collaborative user-library-read';
export const full_auth_url =
    base_auth_url +
    querystring.stringify({
      response_type: "token",
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
    });
