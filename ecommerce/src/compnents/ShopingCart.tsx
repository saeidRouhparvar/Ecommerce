import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Color from "./Color";
import { closeBtn } from "./Svg";
import Counter from "./Counter";

const ShopingCart = () => {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <Flex justify={"space-between"}>
        <Flex direction={"column"} gap={"24px"}>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            {...Typography.Body2_Medium}
          >
            Item
          </Box>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural12 : ""}
            {...Typography.Caption_Regular}
          >
            Dimmable celling ...
          </Box>
        </Flex>
        <Flex direction={"column"} gap={"24px"}>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            {...Typography.Body2_Medium}
          >
            Price
          </Box>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural12 : ""}
            {...Typography.Caption_Regular}
          >$ 220</Box>
        </Flex>
        <Flex direction={"column"} gap={"24px"}>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            {...Typography.Body2_Medium}
          >
            Number
          </Box>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural12 : ""}
            {...Typography.Caption_Regular}
          ><Counter/></Box>
        </Flex>
        <Flex direction={"column"} gap={"24px"}>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            {...Typography.Body2_Medium}
          >
            Total
          </Box>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural12 : ""}
            {...Typography.Caption_Regular}
          >$ 580</Box>
        </Flex>
        <Box>{closeBtn}</Box>
      </Flex>
      <Flex
      color={colorMode === "light" ? Color.ColorNatural.Natural8 : ""}
      {...Typography.Caption_Regular} mt={"10px"} gap={1}
      >
        <Box>Color: </Box>
        <Box>Gold</Box>
      </Flex>
    </Container>
  );
};
export default ShopingCart;
