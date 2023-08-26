import { Box } from '@chakra-ui/react'
import React from 'react'
import Trending from './trending/Trending'
import Offers from './Offers'

const Product = ()  =>{
  return (
   <Box>
    <Trending/>
    <Offers/>
   </Box>
  )
}

export default Product