import React from "react";
// import { Radio as RadioButton,Input } from "@chakra-ui/react";
import { RadioProps } from "@chakra-ui/radio/dist/radio";

interface Interface extends RadioProps {
  children?: any;
  reset?: any;
}

const RadioBtn = ({ children, ...reset }: Interface) => {
  return (
    <RadioBtn>
      <input type="radio"/>
    </RadioBtn>
  );
};

export default RadioBtn;
