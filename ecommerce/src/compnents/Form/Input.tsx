import { Box, Input as ChakraInput, useColorMode } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/button/dist/button";
import React from "react";
import Color from "../Color";
import Typography from "../Typography";

enum VariantEnum {
    InputNatural="InputNatural"
  }
  
  interface Interface extends ButtonProps {
    children?: any;
    reset?: any;
    variant?:
       "InputNatural"
  }

const Input = ({variant, ...reset}:Interface) => {
  const { colorMode } = useColorMode();
  return (
    <Box width={"full"} position={"relative"}>
      <ChakraInput
        w={"100%"}
        p={"12px"}
        h={"48px"}
        variant={variant}
  
      />
    </Box>
  );
};

export default Input;
