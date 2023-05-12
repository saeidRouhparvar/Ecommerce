import { Box, Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/button/dist/button";

import React from "react";

enum VariantEnum {
  colorPrimary = "colorPrimary",
}

interface Interface extends ButtonProps {
  children?: any;
  reset?: any;
  variant?: VariantEnum | any;
}

const Butten = ({ children, variant, ...reset }: Interface) => {
  return (
    <ChakraButton variant={variant} {...reset}>
      {children}
    </ChakraButton>
  );
};
export default Butten;
