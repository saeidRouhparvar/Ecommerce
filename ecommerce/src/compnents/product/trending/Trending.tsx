import { Box } from "@chakra-ui/react";
import React from "react";
import Typography from "../../Typography";
import Container from "../../Container";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  return (
    <Box mt={"43px"}>
      <Container>
        <Box {...Typography.H5} mb={"28px"}>Trending Products</Box>
        <TrendingCard />
      </Container>
    </Box>
  );
};

export default Trending;
