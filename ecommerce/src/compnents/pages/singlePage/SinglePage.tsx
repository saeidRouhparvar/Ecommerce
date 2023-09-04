import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Single from "../../../assets/img/14-1.png";
import { ShareIcon, downloadIcon, likeIcon } from "../../Svg";

const SinglePage = () => {
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
    </Flex>
  );
};
export default SinglePage;
