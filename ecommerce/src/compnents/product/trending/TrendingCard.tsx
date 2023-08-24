import { Box, BoxProps, Flex, Image, useColorMode } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";
import Typography from "../../Typography";
import { Star } from "../../Svg";
import Color from "../../Color";
interface Interface extends BoxProps {
  reset?: any;
  description?: any;
  img?: any;
  count?: any;
  price?: any;
}

const TrendingCard = ({
  description,
  img,
  count,
  price,
  ...reset
}: Interface) => {
  const { colorMode } = useColorMode();
  return (
    <Box w={"160px"}>
      <Card>
        <CardBody p={0}>
          <Image src={img} />
          <Box p={"12px"}>
            <Box
              {...Typography.Body2_Medium}
              w={"105px"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
            >
              {description}
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
                ({count})
              </Box>
            </Flex>
            <Box
              {...Typography.Subtitle2_SemiBold}
              color={colorMode === "light" ? Color.ColorSementic.Error3 : ""}
            >
              $ {price}
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default TrendingCard;
