import axios from "axios";

async function searchPlaylist(term) {
  const backend_url = "https://ytlinkapi.herokuapp.com";
  const { data } = await axios.get(
    `${backend_url}/search/playlist?term=${term}`
  );
  return data;
}

export default searchPlaylist;
