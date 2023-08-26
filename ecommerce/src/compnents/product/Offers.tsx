import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Typography from "../Typography";
import { useColorMode } from "@chakra-ui/color-mode";
import Color from "../Color";
import pic_10 from "../../assets/img/Component 10.png";

const Offers = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} mt={"38px"} >
      <Flex
    justify={"center"}      
        {...Typography.Subtitle1_Bold}
        color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
      >
        Special Offers End At
      </Flex>
      <Flex mt={"22px"} mb={"46px"} w={"196px"} p={"8px"} gap="50px">
        <Button w={"24px"}>1</Button>
        <Button w={"24px"}>2</Button>
        <Button w={"24px"}>3</Button>
      </Flex>
      <Box>
        <Image src={pic_10} />
      </Box>
    </Flex>
  );
};

export default Offers;
