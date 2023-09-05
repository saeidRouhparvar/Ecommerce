import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import Color from '../Color'

interface Interface extends BoxProps {
    reset?:any
    bg?:string
}

export const ChoseCircle = ({bg,...reset}:Interface) => {
  return (
    <Box  borderRadius={"50%"} w={"28px"} h={"28px"} border={"1px solid"} borderColor={Color.ColorNatural.Natural15}  bg={bg}/>
  )
}
export default ChoseCircle