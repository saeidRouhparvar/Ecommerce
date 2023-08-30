import { Box, Flex, useColorMode } from "@chakra-ui/react";
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
      <Flex justify={"space-between"} align={"center"} p={"8px"} borderRadius={"8px"} bg={Color.ColorNatural.Natural22}>
        <Flex gap={"10px"}>
          <Box>{Letter}</Box>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural12 : ""}
            {...Typography.Caption_Regular}
          >
            Enter your e mail address
          </Box>
        </Flex>
        <Button variant="colorPrimaryFilled">Sign Up</Button>
      </Flex>
    </Flex>
  );
};

export default NewsLetter;
