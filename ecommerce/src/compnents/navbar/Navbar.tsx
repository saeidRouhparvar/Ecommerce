import { Box, BoxProps, Flex, space, useColorMode } from "@chakra-ui/react";
import { React, useState } from "react";
import Color from "../Color";
import Typography from "../Typography";
import Button from "../Form/Button";
import Container from "../Container";
import Input from "../Form/Input";
import { Basket, Burger, Location, Logo } from "../Svg";
import SideMenu from "../sideMenu/SideMenu";

interface Interface extends BoxProps {
  reset?: any;
}
const Navbar = ({ ...reset }: Interface) => {
  const { colorMode } = useColorMode();
  const [sideMenuShow, setSideMenuShow] = useState(false);

  return (
    <Container>
      <Flex
        py={"10px"}
        bg={
          colorMode === "light"
            ? Color.ColorNatural.Natural22
            : Color.ColorNatural.Natural3
        }
        justifyContent={"space-between"}
        alignItems={"center"}
        {...reset}
      >
        <Flex gap={"22px"} alignItems={"center"}>
          <Box
            onClick={() => {
              setSideMenuShow(
                (prevState: any) => sideMenuShow != prevState.sideMenuShow
              );
            }}
          >
            {Burger}
          </Box>

          <Flex gap={"7px"}>
            <Box mt={"5px"}>{Logo}</Box>
            <Box
              {...Typography.Body1}
              color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            >
              Dinky Life
            </Box>
          </Flex>
        </Flex>

        <Flex gap={"18.5px"}>
          <Box
            {...Typography.Caption_Regular}
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
          >
            Sign in
          </Box>

          <Flex gap={"12px"}>
            <Box>{Location}</Box>
            <Box>{Basket}</Box>
          </Flex>
        </Flex>
      </Flex>
      {sideMenuShow && <SideMenu />}
      <Input variant="InputAlert" placeholder="fdgfdgfdgfdgdg" />
    </Container>
  );
};
export default Navbar;
