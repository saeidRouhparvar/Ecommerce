import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Color from "./Color";

const Counter = () => {

  const { colorMode } = useColorMode();
  const [counter, setCounter] = useState(0);

 useEffect(() => {
   
 },[counter])

  
  return (
    <Box
      border={"1px solid"}
      borderColor={colorMode === "light" ? Color.ColorNatural.Natural19 : ""}
    >
      <Flex gap={"8px"} justify={"center"}>
        <Box onClick={() => {
             if(counter <= 0){
                counter === 0
            }else{
                setCounter(counter - 1)}
            }
        }>-</Box>
        <Box>{counter}</Box>
        <Box onClick={() => setCounter(counter + 1)}>+</Box>
      </Flex>
    </Box>
  );
};
export default Counter;
