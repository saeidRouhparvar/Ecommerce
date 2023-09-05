import { Flex } from '@chakra-ui/react'
import React from 'react'
import Color from '../Color'
import ChoseCircle from './ChoseCircle'

const bgColor = [
    {id:1,bg:Color.ColorSementic.Info5},
    {id:1,bg:Color.ColorSementic.Error4},
    {id:1,bg:Color.ColorSementic.Success3},
    {id:1,bg:Color.ColorNatural.Natural22},
]

 const ChoseColor = () => {
  return (
    <Flex gap={"10px"}>
        {bgColor.map((color:any) => (
            <ChoseCircle bg={color.bg}/>
        ))}
    </Flex>
  )
}
export default ChoseColor