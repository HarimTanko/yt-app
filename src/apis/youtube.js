import axios from "axios";

const KEY = "AIzaSyBFNQVvfRxpLfS16x3U3aa4iQo7zgjCTIk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
