import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchFromApi } from "../Utils/FetchFromApi";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";

const SearchFeed = () => {
  let [searched, setSearched] = useState("");
  let [videos, setVideos] = useState([]);
  let { searchTerm } = useParams();
  useEffect(() => {
    setSearched(searchTerm);
    
    FetchFromApi(`search?q=${searchTerm}&part=snippet`).then((data) => {
      setVideos(data.items);
    });
    
  },[searchTerm]);
  return <Box sx={{overflowY: "auto",  height:"90vh",  marginTop:"20px"}}>
  <Typography variant='h4' fontWeight={"bold"} mb={4} textAlign={"center"}>
  {searched}<span> Videos</span>
 </Typography>
 <Box >
 <Videos feed={videos} spacing={"center"} direction={"row"}></Videos>
 </Box>
  
 </Box>
};

export default SearchFeed;
