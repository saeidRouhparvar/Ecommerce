import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

interface Interface extends BoxProps {
    reset?:any
    image?:any
}

const OffersCard = ({image,...reset}:Interface) => {
  return (
<Box {...reset}>
    {image}
</Box>
  )
}

export default OffersCard