import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import SuggestedVideos from "./SuggestedVideos";


const Videos = ({ relatedVideos, direction, feed, spacing, mode }) => {

  return <>

    <Stack direction={direction} flexWrap={"wrap"} gap={2} justifyContent={spacing}>
    
      {feed.map((feed, idx) => (
        <Box key={idx}>
            {feed.id.videoId && <VideoCard video={feed} ></VideoCard>}
            {feed.id.channelId && <ChannelCard channel={feed} mode={mode}></ChannelCard>}
           
        </Box>
    ))}


{/* {relatedVideos.map((vid, idx) => ( 
  <Box>
  {vid.id.videoId && <SideBarVideos video={vid}></SideBarVideos>}
  </Box>

))} */}

    
      </Stack>



      
      
  </>
};

export default Videos;
