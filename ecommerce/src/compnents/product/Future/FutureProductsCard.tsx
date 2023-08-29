import { Box, BoxProps, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import cardImage from "../../../assets/img/14-1.png";
import Typography from "../../Typography";
import Color from "../../Color";
import { Arrow } from "../../Svg";

const Images = [{ id: 1, src: "../../" }];

interface Interface extends BoxProps {
  reset?:any
  cardImage?:any
  title?:string
  description?:string
}

const FutureProductsCard = ({title,description,cardImage,...reset}) => {
  const { colorMode } = useColorMode();
  return (
    <Box mb={4} mt={"28px"}>
      <Box maxW={"160px"} >
          <Box as="img" src={cardImage} />
          <Flex direction={"column"} gap={"8px"} mt={"12px"}>
            <Box
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              {...Typography.Body2_Medium}
              color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            >
              {title}
            </Box>
            <Box
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              {...Typography.Caption_Regular}
              color={colorMode === "light" ? Color.ColorNatural.Natural10 : ""}
            >
              {description}
              {/* Donec sollicitudin aliquam metus nec laoreet ... */}
            </Box>
            <Flex direction={"column"} gap={"4px"}>
              <Box
                {...Typography.Caption_Medium}
                color={
                  colorMode === "light" ? Color.ColorPrimery.Primery11 : ""
                }
              >
                More Information
              </Box>
              <Box>{Arrow}</Box>
            </Flex>
          </Flex>
      </Box>
    </Box>
  );
};

export default FutureProductsCard;
