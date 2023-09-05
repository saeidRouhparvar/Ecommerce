import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Star } from '../Svg'

 const Stars = () => {
  return (
    <Flex>
        <Box>{Star}</Box>
        <Box>{Star}</Box>
        <Box>{Star}</Box>
        <Box>{Star}</Box>
        <Box>{Star}</Box>
    </Flex>
  )
}
export default Stars