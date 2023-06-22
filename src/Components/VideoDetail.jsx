import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { FetchFromApi } from "../Utils/FetchFromApi";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  let { id } = useParams();
  let [videoDetail, setVideoDetail] = useState(null);
  let [suggestedVideos, setSuggestedVideos] = useState([]);
  let [error, setError] = useState("");

  
  useEffect(() => {
    FetchFromApi(`videos?part=snippet,contentDetails,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
      })
      .catch((err) => {
        setError(err.message);
      });

      FetchFromApi(`search?relatedToVideoId=${id}&part="id,snippet"&type="video"`).then((data) => {setSuggestedVideos(data.items)});
  }, [id]);
  
  if (!videoDetail?.snippet) return "loading";
  const {
    snippet: { title, channelTitle, channelId }, statistics:{viewCount,likeCount}
  } = videoDetail;

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} pr={{xs:0, md:1.5}}  >
      {error && <Typography>{error}</Typography>}
      <Box flex={1}>
      <Box sx={{  position: "sticky",top:"84px",  width: "100%" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          className="react-player"
        ></ReactPlayer>
        <Typography variant="h5" fontWeight={"bold"} p={1.2}>
          {title}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"} px={1.3}>
          <Link to={`/channel/${channelId}`}>
            <Typography variant="subtitle1" color={"grey"}>{channelTitle}
            <CheckCircle sx={{fontSize:"12px", color:"gray", ml:"5px"}}></CheckCircle>
            </Typography>
          </Link>
        <Stack direction={"row"} gap={3}>
          <Typography variant="subtitle2" sx={{opacity:".7"}}>{parseInt(viewCount).toLocaleString()} views</Typography>
          <Typography variant="subtitle2" sx={{opacity:".7"}}>{parseInt(likeCount).toLocaleString()} likes</Typography>
        </Stack>
        </Stack>

      </Box>
      </Box>
       

      <Stack  sx={{display:"flex",  alignItems:"center", justifyContent:"center"}}>{<Videos feed={suggestedVideos} direction={"column"} ></Videos>}</Stack>
      
    </Stack>
  );
};

export default VideoDetail;
