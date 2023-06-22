import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel, mode }) => {
  
  return (
    <Box sx={{ width: { xs: "100%", md:"310px" }, display:"flex", justifyContent:"center", alignItems:"center", margin:"auto" }}>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={channel?.snippet?.thumbnails?.high?.url}
            alt={channel?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              border: "1px solid #e3e3e3",
              borderRadius: "100px",
              
            }}
          ></CardMedia>
 
          <Typography variant="h6" sx={{color: mode ? "black" :"white"}}>{channel?.snippet?.title}  <CheckCircle sx={{fontSize:"14px", color:"grey", ml:"5px"}}></CheckCircle></Typography>
          <Typography sx={{color: mode ? "black" :"white"}}>{channel?.statistics?.subscriberCount && channel?.statistics?.subscriberCount + " Subscribers"} </Typography>
         
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
