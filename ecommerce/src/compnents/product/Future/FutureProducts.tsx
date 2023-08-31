import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import FutureProductsCard from "./FutureProductsCard";
import SectionHeader from "../SectionHeader";
import Typography from "../../Typography";
import Color from "../../Color";
import pic from "../../../assets/img/14-1.png";
import Container from "../../Container";

const CardData = [
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: pic,
    count: "2021",
    title: "Slip On Shoes Casual with Arch Support Insoles",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: pic,
    count: "2021",
    title: "Slip On Shoes Casual with Arch Support Insoles",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: pic,
    count: "2021",
    title: "Slip On Shoes Casual with Arch Support Insoles",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: pic,
    count: "2021",
    title: "Slip On Shoes Casual with Arch Support Insoles",
  },
];

const FutureProducts = () => {
  const { colorMode } = useColorMode();
  return (
    <Container mt={"58px"}>
      <Flex justify={"space-between"} align={"center"}>
        <SectionHeader title="Future Products" />
        <Flex align={"center"}>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            {...Typography.Caption_Regular}
          >
            View All
          </Box>
          <Box>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1061_4230)">
                <path
                  d="M10.7817 7.33312L7.20566 3.75712L8.14833 2.81445L13.3337 7.99979L8.14833 13.1851L7.20566 12.2425L10.7817 8.66645H2.66699V7.33312H10.7817Z"
                  fill="#404040"
                />
              </g>
              <defs>
                <clipPath id="clip0_1061_4230">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Flex>
      </Flex>
      <Container>
        <Flex gap={"16px"} overflow={"scroll"}>
          {CardData.map((item: any) => (
            <FutureProductsCard
              cardImage={item.img}
              description={item.description}
              title={item.title}
            />
          ))}
        </Flex>
      </Container>
    </Container>
  );
};

export default FutureProducts;
