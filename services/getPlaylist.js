import axios from "axios";

async function getPlaylist(playlistId) {
  const backend_url = "https://ytlinkapi.herokuapp.com";
  const { data } = await axios.get(
    `${backend_url}/info/playlist/${playlistId}`
  );
  return data;
}

export default getPlaylist;
