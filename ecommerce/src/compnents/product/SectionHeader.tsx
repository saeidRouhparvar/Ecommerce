import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import Typography from '../Typography'

interface Interface extends BoxProps {
    reset?:any
    title?:string
}

const SectionHeader = ({title,...reset}:Interface) => {
  return (
    <Box {...Typography.H5} >
    {title}
  </Box>
  )
}

export default SectionHeader