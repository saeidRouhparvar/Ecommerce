import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Typography from "../../Typography";
import { useColorMode } from "@chakra-ui/color-mode";
import Color from "../../Color";
import Component10 from "../../../assets/img/Component10.png";
import OffersCard from "./OffersCard";


const CardData = [
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: Component10,
    count: "2021",
    price: "190.22",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: Component10,
    count: "2021",
    price: "190.22",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: Component10,
    count: "2021",
    price: "190.22",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: Component10,
    count: "2021",
    price: "190.22",
  },
];

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
        {CardData.map((item:any) => (
          <OffersCard image={item.Component10}/>
        ))}
      </Box>
    </Flex>
  );
};

export default Offers;
