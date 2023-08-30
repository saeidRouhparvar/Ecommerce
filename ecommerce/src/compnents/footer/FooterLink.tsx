import { Flex, Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaceBook, Instagram, LinkedIn, PlayStore, Twetter } from "../Svg";
import USA from "../../assets/img/US.png";
import Typography from "../Typography";
import Color from "../Color";

const FooterLink = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction={"column"} gap={"20px"}>
      <Flex
        gap={"24px"}
        justify={"center"}
        color={colorMode === "light" ? Color.ColorNatural.Natural12 : ""}
        {...Typography.Caption_Medium}
      >
        <Flex gap={"4px"}>
          <Box as="img" src={USA} />
          <Box> (English)</Box>
        </Flex>
        <Flex gap={"4px"}>
          <Box>$</Box>
          <Box> (USD) US.Dollar</Box>
        </Flex>
      </Flex>
      <Flex gap={"12px"} justify={"center"}>
        <Box>{FaceBook}</Box>
        <Box>{LinkedIn}</Box>
        <Box>{Twetter}</Box>
        <Box>{PlayStore}</Box>
        <Box>{Instagram}</Box>
      </Flex>
      <Flex fontSize={"10px"} color={"#737373"} justify={"center"}>Copyright 2023 © .Store. All right reserved.</Flex>
    </Flex>
  );
};

export default FooterLink;
