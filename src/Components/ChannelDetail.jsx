import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchFromApi } from "../Utils/FetchFromApi";
import { Box, Stack } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
  let [channelDetail, setChannelDetail] = useState();
  let [vid, setVid] = useState([]);
  let { id } = useParams();
  
  useEffect(() => {
    FetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
      FetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
        (data) => {
          setVid(data.items);
        }
      );
    });
  }, [id]);
  console.log(vid);
  return (
    <>
      <Box>
        <ChannelCard channel={channelDetail}></ChannelCard>
        <Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center",  }}>
        {vid.map((v,idx ) => (
         <Box sx={{marginRight:"20px", marginBottom:"20px", marginLeft:{xs: "20px"}} }key={idx} ><VideoCard video={v}></VideoCard></Box> 
        ))}
        </Box>
       
      </Box>
      
      
    </>
  );
};

export default ChannelDetail;
