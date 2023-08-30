import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Brutal from ".././../../assets/img/Brutal.png";
import Typography from "../../Typography";
import Container from "../../Container";
import Color from "../../Color";
import Button from "../../Form/Button";

const BrutalSale = () => {
  const { colorMode } = useColorMode();
  return (
      <Flex  mt={"48px"} mb={"40px"}>
        <Box as="img" src={Brutal} />
        <Flex direction={"column"}>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            {...Typography.H5}
          >
            Brutal sale
          </Box>
          <Box 
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
        
          {...Typography.Body2_Medium} mt={"12px"}>
            Office Outfit
          </Box>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural11 : ""}
            {...Typography.Caption_Regular} mt={"4px"}>
            Discount everyday & every Where
          </Box>
          <Button variant={"colorPrimaryFilled"} mt={"28px"}>
            Shop Now
          </Button>
        </Flex>
      </Flex>
  );
};

export default BrutalSale;
