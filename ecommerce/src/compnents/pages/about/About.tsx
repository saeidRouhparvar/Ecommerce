import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import Typography from "../../Typography";
import Color from "../../Color";
import TitleHeader from "../../titleHeader";
import TextParag from "../../Text";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <TitleHeader title="About Dinky Life" />
      <TextParag
        text="       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor
        ad exercitationem sed qua quos estculpa incidunt perferendis.Lorem
        ipsum, dolor amet consectetur adipisicing elit.Corrupti dolor ad
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor ad
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit."
      />
    </Box>
  );
};
export default About;
