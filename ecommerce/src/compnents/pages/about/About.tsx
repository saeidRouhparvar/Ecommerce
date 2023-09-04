import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import Typography from "../../Typography";
import Color from "../../Color";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box
        {...Typography.Body1}
        color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
      >
        About Dinky Life
      </Box>
      <Box
        {...Typography.Body2_Regular}
        color={colorMode === "light" ? Color.ColorNatural.Natural10 : ""}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor
        ad exercitationem sed qua quos estculpa incidunt perferendis.Lorem
        ipsum, dolor amet consectetur adipisicing elit.Corrupti dolor ad
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor ad
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. dolor ad
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit.adipisicing elit.
        Corrupti dolor ad exercitationem sed qua quos estculpa incidunt
        perferendis.Lorem ipsum, dolor amet consectetur adipisicing
        elit.Corrupti dolor ad exercitationem sed quas quos odit est culpa
        incidunt perferendis Lorem ipsum, dolor sit amet consectetur adipisicing
        elit.
      </Box>
    </Box>
  );
};
export default About;
