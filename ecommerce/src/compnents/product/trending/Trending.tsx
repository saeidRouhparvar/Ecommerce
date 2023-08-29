import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Typography from "../../Typography";
import Container from "../../Container";
import TrendingCard from "./TrendingCard";
import product_01 from "../../../assets/img/product_01.png";
import Slider from 'react-slick'

const CardData = [
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: product_01,
    count: "2021",
    price: "190.22",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: product_01,
    count: "2021",
    price: "190.22",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: product_01,
    count: "2021",
    price: "190.22",
  },
  {
    id: 1,
    description: "Women’s light weight knit hoodie sweater pullover",
    img: product_01,
    count: "2021",
    price: "190.22",
  },
];

const Trending = () => {
  return (
    <Box  mt={"43px"}>
      <Container>
        <Box {...Typography.H5} mb={"28px"}>
          Trending Products
        </Box>
        <Flex pb={4} gap={"40px"} maxW={"360px"} overflow={"scroll"} >
            {CardData.map((item: any) => (
              <TrendingCard
                description={item.description}
                price={item.price}
                img={item.img}
                count={item.count}
              />
            ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Trending;
