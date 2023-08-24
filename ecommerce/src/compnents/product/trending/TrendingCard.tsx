import { Box, Flex, Image, useColorMode } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import product_01 from "../../../assets/img/product_01.png";
import React from "react";
import Typography from "../../Typography";
import { Star } from "../../Svg";
import Color from "../../Color";

const TrendingCard = () => {
  const { colorMode } = useColorMode();
  return (
    <Box w={"160px"}>
      <Card>
        <CardBody p={0}>
          <Image src={product_01} />
          <Box p={"12px"}>
            <Box
              {...Typography.Body2_Medium}
              w={"105px"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
            >
              Women’s light weight knit hoodie sweater pullover
            </Box>
            <Flex my={"10px"} align={"center"}>
              <Box>{Star}</Box>
              <Box>{Star}</Box>
              <Box>{Star}</Box>
              <Box>{Star}</Box>
              <Box>{Star}</Box>
              <Box
                {...Typography.Caption_Medium}
                ms={"10px"}
                color={
                  colorMode === "light" ? Color.ColorNatural.Natural12 : ""
                }
              >
                (2.281)
              </Box>
            </Flex>
            <Box
              {...Typography.Subtitle2_SemiBold}
              color={colorMode === "light" ? Color.ColorSementic.Error3 : ""}
            >
              $ 190.22
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default TrendingCard;
