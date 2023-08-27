import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import SuggestedVideos from "./SuggestedVideos";


const SuggestedVideosDetail = ({ relatedVideos, direction, spacing, mode }) => {

    console.log(relatedVideos);
  return <>

    <Stack direction={direction} flexWrap={"wrap"} gap={2} justifyContent={spacing}>
    
      {relatedVideos.map((vid, idx) => (
        <Box key={idx}>
            {vid.id.videoId && <SuggestedVideos video={vid} ></SuggestedVideos>}
           
        </Box>
    ))}




    
      </Stack>



      
      
  </>
};

export default SuggestedVideosDetail;
