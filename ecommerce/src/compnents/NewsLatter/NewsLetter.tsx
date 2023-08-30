import {
  Box,
  Flex,
  useColorMode,
  InputLeftElement,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import Color from "../Color";
import { Letter } from "../Svg";
import Typography from "../Typography";
import Button from "../Form/Button";

const NewsLetter = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction={"column"}
      gap={"12px"}
      p={"16px 12px"}
      bg={Color.ColorPrimery.Primery20}
    >
      <Box
        color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
        {...Typography.Body2_Medium}
      >
        Join Our News Letter
      </Box>
      <Box
        color={colorMode === "light" ? Color.ColorNatural.Natural11 : ""}
        {...Typography.Caption_Medium}
      >
        Get E-mail updates about our latest shop{" "}
      </Box>
      <Flex
        justify={"space-between"}
        align={"center"}
        p={"8px"}
        borderRadius={"8px"}
      >
        <InputGroup >
          <InputLeftElement pointerEvents="none">
            <Box>{Letter}</Box>
          </InputLeftElement>
          <InputRightElement>
            <Button me={8} variant="colorPrimaryFilled">Sign Up</Button>
          </InputRightElement>
          <Input _focusVisible={"none"} bg={Color.ColorNatural.Natural22} border={"none"} placeholder="Enter your e mail address" />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default NewsLetter;
