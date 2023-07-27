import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/button/dist/button";

import React from "react";

enum VariantEnum {
  colorPrimary = "colorPrimaryFilled",
  colorPrimaryOutline = "colorPrimaryOutline",
  colorPrimaryText = "colorPrimaryText",
  colorSecondaryFilled = "colorSecondary",
  colorSecondaryOutline = "colorSecondaryOutline",
  colorSecondaryText = "colorSecondaryText",
}

interface Interface extends ButtonProps {
  children?: any;
  reset?: any;
  variant?:
    | "colorPrimaryFilled"
    | "colorPrimaryOutline"
    | "colorPrimaryText"
    | "colorSecondaryFilled"
    | "colorSecondaryOutline "
    | "colorSecondaryText";
}

const Button = ({ children, variant, ...reset }: Interface) => {
  return (
    <ChakraButton
      variant={variant}
      {...reset}
      onClick={(e) => {
        if (reset?.onClick) {
          reset.onClick(e);
        }
      }}
    >
      {children}
    </ChakraButton>
  );
};
export default Button;
