import { Button, ComponentStyleConfig } from "@chakra-ui/react";
import Color from "../Color";

const colorPrimary = ({ colorMode }) => ({
  backgroundColor: `Color.ColorPrimary.Primary11`,
  border: "1px solid",
  borderColor: `Color.ColorPrimary.Primary11`,
  color: `Color.ColorNeutral.Natural21`,
  borderRadius: "8px",
  minWidth: "150px",
  _hover: {
    backgroundColor: `Color.ColorPrimary.Primary11`,
  },
  _active: {
    backgroundColor: `Color.ColorPrimary.Primary8`,
  },
  _disabled: {
    backgroundColor: `Color.ColorNatural.Natural19`,
    color: `Color.ColorNatural.Natural16`,
  },
});

const colorSecondary = ({ colorMode }) => ({
  backgroundColor: `Color.colorSecondary.Secondary11`,
  border: "1px solid",
  borderColor: `Color.colorSecondary.Secondary11`,
  color: `Color.ColorNeutral.Natural21`,
  borderRadius: "8px",
  minWidth: "150px",
  _hover: {
    backgroundColor: `Color.ColorSecondary.Secondary10`,
  },
  _active: {
    backgroundColor: `Color.ColorSecondary.Secondary9`,
  },
  _disabled: {
    backgroundColor: `Color.ColorNatural.Natural19`,
    color: `Color.ColorNatural.Natural16`,
  },
});

const ButtonStyle: ComponentStyleConfig = {
  variants: {
    colorPrimary,
    colorSecondary,
  },

  sizes: {
    lg: {
      height: "58px",
    },
    md: {
      height: "48px",
    },
    sm: {
      height: "40px",
    },
  },
};

export default ButtonStyle;
