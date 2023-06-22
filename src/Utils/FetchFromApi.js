import axios from "axios";

let baseUrl = "https://youtube-v31.p.rapidapi.com/";
const options = {
  url: baseUrl,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key":"3eab29036amsh06806f472744ffdp1d8452jsn0a3bde9eda30",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchFromApi = async (url) => {
    let {data} = await axios.get(`${baseUrl}${url}`, options);
    return data;
}