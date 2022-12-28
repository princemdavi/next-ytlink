import axios from "axios";
async function getVideo(video_id) {
  const backend_url = "https://ytlinkapi.herokuapp.com";
  const { data } = await axios.get(`${backend_url}/info/video/${video_id}`);
  return data;
}

export default getVideo;
