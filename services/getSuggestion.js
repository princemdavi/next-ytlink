import axios from "axios";

async function getSuggestion(term) {
  const backend_url = "https://ytlinkapi.herokuapp.com";
  const { data } = await axios.get(`${backend_url}/suggestion?term=${term}`);
  return data;
}

export default getSuggestion;
