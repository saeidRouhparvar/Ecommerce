import { Box, BoxProps, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Color from "../Color";
import Typography from "../Typography";
import { Link } from "react-router-dom";

interface Interface extends BoxProps {
  reset?: any;
  title?: string;
  description?: string;
  icon?: any;
  to?:string
}

const Menu = ({ title, description, icon,to, ...reset }: Interface) => {
  const { colorMode } = useColorMode();

  return (
    // <Link to={"to"}>
      <Box
        {...reset}
        borderBottom={"1px solid"}
        borderColor={colorMode === "light" ? Color.ColorNatural.Natural19 : ""}
        pb={"8px"}
      >
        <Flex justify={"space-between"}>
          <Flex {...Typography.Caption_Medium} gap={2}>
            <Box
              color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            >
              {title}
            </Box>
            <Box
              color={colorMode === "light" ? Color.ColorNatural.Natural12 : ""}
            >
              {description}
            </Box>
          </Flex>
          <Box>{icon}</Box>
        </Flex>
        <Box></Box>
      </Box>
    // </Link>
  );
};

export default Menu;
