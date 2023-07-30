import { ComponentStyleConfig } from "@chakra-ui/react";
import Color from "../Color";
import Typography from "../Typography";

const InputNatural = ({ colorMode }) => ({
  border: "1px solid",
  borderColor: colorMode === "light" ? Color.ColorNatural.Natural20 : "",
  backgroundColor: colorMode === "light" ? Color.ColorNatural.Natural20 : "",
  color: colorMode === "light" ? Color.ColorNatural.Natural1 : "",
  ...Typography.Caption_Input,
  _placeholder: {
    color: colorMode === "light" ? Color.ColorNatural.Natural11 : "",
  },
  _hover: {
    color: colorMode === "light" ? Color.ColorNatural.Natural8 : "",
  },
  _focusVisible: {
    color: colorMode === "light" ? Color.ColorNatural.Natural6 : "",
    outline: "none",
  },
  _disabled: {
    color: colorMode === "light" ? Color.ColorNatural.Natural15 : "",
  },
});

const InputStyle: ComponentStyleConfig = {
    variants: {
        InputNatural
    },
    // sizes: {
    //   lg: {
    //     height: "58px",
    //   },
    //   md: {
    //     height: "48px",
    //   },
    //   sm: {
    //     height: "40px",
    //   },
    // },
  };

export default InputStyle
