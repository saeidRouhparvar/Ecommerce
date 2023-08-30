import { Box } from '@chakra-ui/react'
import React from 'react'
import Trending from './trending/Trending'
import Offers from './offers/Offers'
import FutureProducts from './Future/FutureProducts'
import BrutalSale from './BrutalSale/BrutalSale'

const Product = ()  =>{
  return (
   <Box>
    <Trending/>
    <Offers/>
    <FutureProducts/>
    <BrutalSale/>
   </Box>
  )
}

export default Product