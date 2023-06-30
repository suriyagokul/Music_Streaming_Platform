const config = {
  spotify_client_id:
    process.env.SPOTIFY_CLIENT_ID || "1cb0b73198364630836aa846d12137df",
  spotify_client_secret:
    process.env.SPOTIFY_CLIENT_SECRET || "a3cb4408f9e5443fb429291c08fc0a6d",
  spotify_userId: process.env.SPOTIFY_USER_ID,
};

export default config;
