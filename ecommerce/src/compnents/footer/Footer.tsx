import { Flex, Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import Typography from "../Typography";
import Color from "../Color";
import FooterLink from "./FooterLink";

const Help = [
  { title: "Your Account" },
  { title: "Your Order" },
  { title: "Shipping Rates" },
  { title: "Returns" },
  { title: "Assistant" },
  { title: "Help" },
  { title: "Contact us" },
];
const About = [
  { title: "Company Info" },
  { title: "News" },
  { title: "Investor" },
  { title: "Careers" },
  { title: "Policies" },
  { title: "Costumer Review" },
];
const Payment = [
  { title: "Bussines Card" },
  { title: "Shop With Points" },
  { title: "Reload Your Balance" },
  { title: "Paypal" },
];

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      p={"16px 12px"}
      borderTop={"1px solid"}
      borderColor={colorMode === "light" ? Color.ColorPrimery.Primery19 : ""}
      gap={"20px"}
      direction={"column"}
    >
      <Flex justify={"space-between"}>
        <Flex gap={"16px"} direction={"column"} p={"10px 12px"}>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural5 : ""}
            {...Typography.Body2_Medium}
          >
            Help & Contact
          </Box>
          {Help.map((item: any) => (
            <Box
              color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
              {...Typography.Caption_Regular}
            >
              {item.title}
            </Box>
          ))}
        </Flex>
        <Flex gap={"16px"} direction={"column"} p={"10px 12px"}>
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural5 : ""}
            {...Typography.Body2_Medium}
          >
            About US
          </Box>
          {About.map((item: any) => (
            <Box
              color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
              {...Typography.Caption_Regular}
            >
              {item.title}
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex gap={"16px"} direction={"column"} p={"10px 12px"}>
        <Box
          color={colorMode === "light" ? Color.ColorNatural.Natural5 : ""}
          {...Typography.Body2_Medium}
        >
          Payment Info
        </Box>
        {Payment.map((item: any) => (
          <Box
            color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            {...Typography.Caption_Regular}
          >
            {item.title}
          </Box>
        ))}
      </Flex>
      <Box mt={"10px"}>
        <FooterLink/>
      </Box>
    </Flex>
  );
};

export default Footer;
