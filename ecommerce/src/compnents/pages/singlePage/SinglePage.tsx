import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Single from "../../../assets/img/14-1.png";
import { ShareIcon, downloadIcon, likeIcon } from "../../Svg";
import TitleHeader from "../../titleHeader";
import TextParag from "../../Text";

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
      <TitleHeader title="Slip On Shoes Casual with Arch Support Insoles" />
      <Box>
        <TextParag
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolor
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
    </Flex>
  );
};
export default SinglePage;
