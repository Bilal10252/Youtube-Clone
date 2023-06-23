import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";


const Videos = ({ direction, feed, spacing, mode }) => {
    
  return (

    <Stack direction={direction} flexWrap={"wrap"} gap={2} justifyContent={spacing} >
    
      {feed.map((feed, idx) => (
        <Box key={idx}>
            {feed.id.videoId && <VideoCard video={feed} ></VideoCard>}
            {feed.id.channelId && <ChannelCard channel={feed} mode={mode}></ChannelCard>}
        </Box>
    ))}
    
      </Stack>
      
  );
};

export default Videos;
