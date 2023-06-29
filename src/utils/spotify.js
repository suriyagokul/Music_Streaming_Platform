import config from "../config/spotify.config";

// Spotify Documentation https://developer.spotify.com/documentation/web-playback-sdk

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

// user can perform these operations only.. If we give more scopes then user can able to do more operations like delete..
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Retrieve Token
export const getTokenFromUrl = () => {
  return window.location.hash // window.location.hash --> For example, http://example.org/#foo would return the fragment identifier of #foo.
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
export const loginUrl = `${authEndpoint}?client_id=${
  config.spotify_client_id
}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
