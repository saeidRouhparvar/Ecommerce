import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Single from "../../../assets/img/14-1.png";
import { ShareIcon, downloadIcon, likeIcon } from "../../Svg";
import Typography from "../../Typography";
import Color from "../../Color";

const SinglePage = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex direction={"column"}>
      <Flex>
        <Box as="img" src={Single} />
        <Flex justify={"space-between"}>
          <Flex>
            <Box>{downloadIcon}</Box>
            <Box>{ShareIcon}</Box>
          </Flex>
          <Box>{likeIcon}</Box>
        </Flex>
      </Flex>

      <Box
        {...Typography.Body1}
        color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
      >
        Slip On Shoes Casual with Arch Support Insoles
      </Box>
      <Box
          {...Typography.Body1}
          color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor
        ad exercitationem sed qua quos estculpa incidunt perferendis.Lorem
        ipsum, dolor amet consectetur adipisicing elit.Corrupti dolor ad
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor ad
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor
        exercitationem sed quas quos odit est culpa incidunt perferendis Lorem
        ipsum, dolor sit amet consectetur adipisicing elit.
      </Box>
    </Flex>
  );
};
export default SinglePage;
