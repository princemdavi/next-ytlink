import axios from "axios";

async function searchVideo(term) {
  const backend_url = "https://ytlinkapi.herokuapp.com";
  const { data } = await axios.get(`${backend_url}/search/video?term=${term}`);
  return data;
}

export default searchVideo;
