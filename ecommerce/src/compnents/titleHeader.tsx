import { Box, BoxProps, useColorMode } from "@chakra-ui/react";
import React from "react";
import Typography from "./Typography";
import Color from "./Color";

interface Interface extends BoxProps {
  reset?: any;
  title?: string;
}

const TitleHeader = ({ title, ...reset }: Interface) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      {...Typography.Body1}
      color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
    >
      {title}
    </Box>
  );
};
export default TitleHeader;
