import { Box } from '@chakra-ui/react'
import React from 'react'
import Trending from './trending/Trending'
import Offers from './Offers'
import FutureProducts from './Future/FutureProducts'

const Product = ()  =>{
  return (
   <Box>
    <Trending/>
    <Offers/>
    <FutureProducts/>
   </Box>
  )
}

export default Product