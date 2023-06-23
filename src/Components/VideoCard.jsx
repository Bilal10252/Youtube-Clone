import { Card, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },loading
}) => {

  
  return (
    
    
    <Card sx={{ width: { xs: "330px", md:"300px" }, marginTop:"5px" }}>
      
      <Link to={videoId && `/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.medium?.url}
          sx={{ width: "100%", height: 180 }}
          alt={snippet?.title}
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

export default VideoCard;
