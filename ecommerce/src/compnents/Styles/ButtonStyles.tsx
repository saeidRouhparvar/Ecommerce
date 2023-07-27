import { ComponentStyleConfig } from "@chakra-ui/react";
import Color from "../Color";

const colorPrimaryFilled = ({ colorMode }) => ({
  backgroundColor: Color.ColorPrimery.Primery11,
  border: "1px solid",
  borderColor: Color.ColorPrimery.Primery11,
  color: Color.ColorNatural.Natural21,
  borderRadius: "8px",
  minWidth: "150px",
  _hover: {
    backgroundColor: Color.ColorPrimery.Primery9,
  },
  _active: {
    backgroundColor: Color.ColorPrimery.Primery8,
  },
  _disabled: {
    backgroundColor: Color.ColorNatural.Natural16,
    color: Color.ColorNatural.Natural19,
  },
});
const colorPrimaryOutline = ({ colorMode }) => ({
  border: "1px solid",
  borderColor: Color.ColorPrimery.Primery11,
  color: Color.ColorPrimery.Primery11,
  borderRadius: "8px",
  minWidth: "150px",
  _hover: {
    borderColor: Color.ColorPrimery.Primery9,
    color: Color.ColorPrimery.Primery9,
  },
  _disabled: {
    color: Color.ColorNatural.Natural16,
    borderColor: Color.ColorNatural.Natural16,
  },
});
const colorPrimaryText = ({ colorMode }) => ({
  color: Color.ColorPrimery.Primery11,
  minWidth: "150px",
  _hover: {
    borderColor: Color.ColorPrimery.Primery9,
    color: Color.ColorPrimery.Primery9,
  },
  _disabled: {
    color: Color.ColorNatural.Natural16,
    borderColor: Color.ColorNatural.Natural16,
  },
});

const colorSecondaryFilled = ({ colorMode }) => ({
  backgroundColor: Color.ColorSecondary.Secondary11,
  border: "1px solid",
  borderColor: Color.ColorSecondary.Secondary11,
  color: Color.ColorNatural.Natural21,
  borderRadius: "8px",
  minWidth: "150px",

  _hover: {
    backgroundColor: Color.ColorSecondary.Secondary10,
  },
  _active: {
    backgroundColor: Color.ColorSecondary.Secondary9,
  },
  _disabled: {
    backgroundColor: Color.ColorNatural.Natural16,
    color: Color.ColorNatural.Natural16,
  },
});
const colorSecondaryOutline = ({ colorMode }) => ({
  border: "1px solid",
  borderColor: Color.ColorSecondary.Secondary11,
  color:  Color.ColorSecondary.Secondary11,
  borderRadius: "8px",
  minWidth: "150px",
  _hover: {
    borderColor:  Color.ColorSecondary.Secondary10,
   color:  Color.ColorSecondary.Secondary10,
  },
  _disabled: {
    color: Color.ColorNatural.Natural16,
    borderColor: Color.ColorNatural.Natural16,
  },
});
const colorSecondaryText = ({ colorMode }) => ({
  color:  Color.ColorSecondary.Secondary11,
  minWidth: "150px",
  _hover: {
    borderColor:  Color.ColorSecondary.Secondary10,
   color:  Color.ColorSecondary.Secondary10,
  },
  _disabled: {
    color: Color.ColorNatural.Natural16,
    borderColor: Color.ColorNatural.Natural16,
  },
});

const ButtonStyle: ComponentStyleConfig = {
  variants: {
    colorPrimaryFilled,
    colorPrimaryOutline,
    colorPrimaryText,
    colorSecondaryFilled,
    colorSecondaryOutline,
    colorSecondaryText
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
