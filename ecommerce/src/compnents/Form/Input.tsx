import { Box, Input as ChakraInput, useColorMode } from "@chakra-ui/react";
import { InputProps } from "@chakra-ui/input/dist/input";
import React from "react";

enum VariantEnum {
  InputNatural = "InputNatural",
  InputSementic = "InputSementic",
  InputAlert = "InputAlert",
}

interface Interface extends InputProps {
  children?: any;
  reset?: any;
  placeholder?: any;
  variant?: "InputNatural" | "InputSementic" | "InputAlert";
}

const Input = ({ variant, placeholder, ...reset }: Interface) => {
  const { colorMode } = useColorMode();
  return (
    <Box width={"full"} position={"relative"} {...reset}>
      <ChakraInput
        w={"100%"}
        p={"12px"}
        h={"48px"}
        variant={variant}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default Input;
