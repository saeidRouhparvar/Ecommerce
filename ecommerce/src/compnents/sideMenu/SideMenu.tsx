import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { signIn } from "../Svg";
import Color from "../Color";
import Typography from "../Typography";
import Menu from "./Menu";

const menuData = [
  { title: "Language", description: "(English)", icon: "" },
  { title: "currency", description: "(USD)", icon: "" },
  { title: "Home", description: "", icon: "" },
  { title: "All Departments", description: "", icon: "" },
  { title: "Feature Products", description: "", icon: "" },
  { title: "Top Products", description: "", icon: "" },
  { title: "Wish List", description: "", icon: "" },
  { title: "Contact Us", description: "", icon: "" },
];

const SideMenu = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
    w={"280px"}
      gap={"24px"}
      p={"16px"}
      direction={"column"}
      h={"100vh"}
      bg={colorMode === "light" ? Color.ColorNatural.Natural21 : ""}
    >
      <Flex gap={"6px"} align={"center"} justify={"space-between"}>
      <Box>close</Box>
        <Flex>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural12 : ""}
            {...Typography.Button_Small}
          >
            Sign in
          </Box>
          <Box>{signIn}</Box>
        </Flex>
      </Flex>
      <Box
        color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
        {...Typography.Body1}
      >
        Dinky Life
      </Box>
      {/* {menuData.map((item: any) => (
        <Menu
        key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          to={`${item.title}`}
        />
      ))} */}
    </Flex>
  );
};

export default SideMenu;
