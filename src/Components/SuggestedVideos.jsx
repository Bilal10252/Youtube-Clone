import { Card, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const SuggestedVideos = ({
    video: {
    id: { videoId },
    snippet,
  },loading
}) => {
  
  
  let [url,setUrl] = useState("");
  
  useEffect(() => {    
      setUrl(snippet?.thumbnails?.default?.url.replace("https =>", "https:")); 
  },[])

  
  return (
    
    
    <Card sx={{ width: { xs: "330px", md:"300px" }, marginTop:"5px" }}> 
      
      <Link to={videoId && `/video/${videoId}`}>
        <CardMedia
        // Debugged the url problem created by the api

          // image={snippet?.thumbnails?.default?.url}
          // https =>//i.ytimg.com/vi/XIOoqJyx8E4/default.jpg
          // https://i.ytimg.com/vi/vTekSbandv8/default_live.jpg

          

          image={url}
          sx={{ width: "100%", height: 180 }}
          alt={snippet?.title}
          component='img'
        ></CardMedia>
      </Link>
      <CardContent
        sx={{
          height: "106px",
          backgroundColor:"white"
        }}
      >
        <Link to={videoId && `/video/${videoId}`}>
          <Typography variant="subtitle1"  fontWeight={"bold"}>
            {snippet.title && snippet.title.slice(0, 60)} 
          </Typography>
        </Link>
        <Link to={snippet.channelId && `/channel/${snippet.channelId}`}>
          <Typography variant="subtitle2" color={"gray"} fontWeight={"bold"}>
            {snippet.channelId && snippet.channelTitle} <CheckCircle sx={{fontSize:"14px", color:"grey", ml:"5px"}}></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
    
  );
};

export default SuggestedVideos;
