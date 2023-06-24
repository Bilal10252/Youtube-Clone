import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import SideBar from './SideBar'
import { FetchFromApi } from '../Utils/FetchFromApi'
import Videos from './Videos'
import LoadingSkeleton from './LoadingSkeleton'


const Feed = ({mode}) => {
   let [videos, setVideos] = useState([]);
   let [selectedType, setselectedType] = useState("New");
   let [loading,setLoading] = useState(true);
   
   useEffect(() => {
     
    FetchFromApi(`search?part=snippet&q=${selectedType}`).then((data) => {setVideos(data.items); setLoading(false)});
    
   }, [selectedType])
   
  return ( 
    <Stack sx={{flexDirection:{sm: "column", md: "row"}}}>
        <Box sx={{padding: {sm: 0, md: 2}, borderRight: "1px solid #3d3d3d"}}>
          <SideBar selectedType={(selectedType) => setselectedType(selectedType)} choosenType={selecqtedType}></SideBar>
          <Typography className='copyright' variant='body2' sx={{mt: 1.5}}>COPYRIGHT&copy;2023</Typography>
        </Box>

        <Box p={2} sx={{overflowY: "auto", flex:2, height:"90vh" }}>
           <Typography variant='h4' fontWeight={"bold"} marginBottom={4} textAlign={{xs:"center", md:"start"}}>
           {selectedType}<span> Videos</span>
           
          </Typography>
                 {loading && <LoadingSkeleton ></LoadingSkeleton>}   
          
          <Videos feed={videos} direction={"row"} spacing={{xs:"center", md:"flex-start"}} mode={mode} loading={loading}></Videos>
        
         
        </Box>
    </Stack>
  )
}

export default Feed
