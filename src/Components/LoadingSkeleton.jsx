import { Stack, Box } from '@mui/material'
import React from 'react'
import {Skeleton} from '@mui/material'
const LoadingSkeleton = (arraye) => {
  let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
      {array.map((ar) => (
          <Box direction={"column"} key={ar}  >
            <Skeleton variant='rectangular' width={"300px"} height={"180px"} sx={{borderRadius:"4px"}}> </Skeleton>
            <Skeleton variant='text' width={"200px"} ></Skeleton>
            <Skeleton variant='text' width={"100px"}></Skeleton>
          </Box>
      ))}
    </Stack>
    
    
  );
};

export default LoadingSkeleton