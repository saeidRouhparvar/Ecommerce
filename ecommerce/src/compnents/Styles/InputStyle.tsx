import { ComponentStyleConfig } from "@chakra-ui/react";
import Color from "../Color";
import Typography from "../Typography";

const InputNatural = ({ colorMode }) => ({
  border: "1px solid",
  borderColor: colorMode === "light" ? Color.ColorNatural.Natural20 : "",
  backgroundColor: colorMode === "light" ? Color.ColorNatural.Natural20 : "",
  color: colorMode === "light" ? Color.ColorNatural.Natural11 : "",
  ...Typography.Caption_Input,
  _placeholder: {
    color: colorMode === "light" ? Color.ColorNatural.Natural11 : "",
  },
  _hover: {
    color: colorMode === "light" ? Color.ColorNatural.Natural8 : "",
  },
  _focusVisible: {
    border: "1px solid",
    outline: "none",
    borderColor: colorMode === "light" ? Color.ColorNatural.Natural11 : "",
  },
  _disabled: {
    color: colorMode === "light" ? Color.ColorNatural.Natural15 : "",
  },
});
const InputSementic = ({ colorMode }) => ({
  border: "1px solid",
  borderColor: colorMode === "light" ? Color.ColorSementic.Alert3 : "",
  backgroundColor: colorMode === "light" ? Color.ColorSementic.Alert7 : "",
  color: colorMode === "light" ? Color.ColorNatural.Natural11 : "",
  ...Typography.Caption_Input,
  _placeholder: {
    color: colorMode === "light" ? Color.ColorNatural.Natural11 : "",
  },
  _hover: {
    color: colorMode === "light" ? Color.ColorNatural.Natural8 : "",
    borderColor: colorMode === "light" ? Color.ColorSementic.Alert2 : "",
  },
  _focusVisible: {
    border: "1px solid",
    outline: "none",
    borderColor: colorMode === "light" ? Color.ColorSementic.Alert1 : "",
  },
  _disabled: {
    color: colorMode === "light" ? Color.ColorSementic.Alert6 : "",
  },
});
const InputAlert = ({ colorMode }) => ({
  border: "1px solid",
  borderColor: colorMode === "light" ? Color.ColorSementic.Alert3 : "",
  backgroundColor: colorMode === "light" ? Color.ColorSementic.Alert7 : "",
  color: colorMode === "light" ? Color.ColorNatural.Natural11 : "",
  ...Typography.Caption_Input,
  _placeholder: {
    color: colorMode === "light" ? Color.ColorNatural.Natural11 : "",
  },
  _hover: {
    color: colorMode === "light" ? Color.ColorNatural.Natural8 : "",
    borderColor: colorMode === "light" ? Color.ColorSementic.Alert2 : "",
  },
  _focusVisible: {
    border: "1px solid",
    outline: "none",
    borderColor: colorMode === "light" ? Color.ColorSementic.Alert1 : "",
  },
  _disabled: {
    color: colorMode === "light" ? Color.ColorSementic.Alert6 : "",
  },
});

const InputStyle: ComponentStyleConfig = {
  variants: {
    InputNatural,
    InputSementic,
    InputAlert,
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

export default InputStyle;
