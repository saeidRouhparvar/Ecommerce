import { Checkbox as ChakraCheckBox } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/button/dist/button";

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

const CheckBox = ({children,variant,...reset}:Interface) => {
  return (
    <>
      <ChakraCheckBox
      variant={variant}
      {...reset}
      >
        {children}
      </ChakraCheckBox>
    </>
  );
};

export default CheckBox;
