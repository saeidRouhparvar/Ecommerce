import React from 'react'
import {Radio as RadioButton} from "@chakra-ui/react";
import {RadioProps} from "@chakra-ui/radio/dist/radio";


interface Interface extends RadioProps {
    children?:any
    reset?: any
}

const RadioBtn = ({children,...reset}:Interface) => {
  return (
    <RadioButton
   colorScheme='green' variant={"outline"}
    {...reset}>
        {children}
    </RadioButton>
  )
}

export default RadioBtn