import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Typography from "../Typography";
import Color from "../Color";
import Container from "../Container";
import Mask from "../../assets/img/Mask group.svg";
import banner from "../../assets/img/banner.png";

const MainBanner = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex mt={"28px"}>
      <Container>
        <Flex
          gap={2}
          direction={"column"}
          color={colorMode === "light" ? Color.ColorNatural.Natural2 : ""}
        >
          <Flex gap={1} align={"center"}>
            <Box {...Typography.H6}>choose</Box>
            <Box {...Typography.H5}> Dinky Life</Box>
          </Flex>
          <Box {...Typography.Body2_Medium}>if you wanna be special</Box>
          <Flex
            mt={"9px"}
            direction={"column"}
            {...Typography.Caption_Regular}
            color={colorMode === "light" ? Color.ColorNatural.Natural9 : ""}
          >
            <Box>Women’s light weight knit</Box>
            <Box>hoodie sweater pullover</Box>
          </Flex>
          <Flex justifyContent={"right"}>
            <svg
              width="48"
              height="46"
              viewBox="0 0 48 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1106_5483)">
                <path
                  d="M8.69474 18.7941C8.60775 18.9871 8.54415 19.0405 8.52562 19.1214C8.49923 24.7347 10.3172 29.6606 14.4061 33.6063C15.4362 34.6052 16.703 35.3181 18.1116 35.7486C21.1227 36.6973 24.2534 35.6274 26.0402 33.0592C26.9791 31.7259 27.6428 30.2859 27.6158 28.6083C27.0171 28.1192 26.4046 27.6525 25.8783 27.1462C25.0237 26.316 24.5273 25.305 24.5928 24.0839C24.6204 23.1779 25.0311 22.5061 25.6107 22.3682C26.3714 22.1873 27.0024 22.5731 27.3427 23.1811C27.8174 24.025 28.1923 24.9309 28.5084 25.8317C28.7087 26.4156 28.773 27.0701 28.8646 27.6798C31.6438 28.856 34.1903 27.1213 34.8834 23.6075C34.5776 23.2975 34.2493 22.9737 33.9572 22.6413C32.9014 21.3806 32.3938 19.9321 32.742 18.2993C32.8766 17.674 33.1512 17.0729 33.8983 16.9143C34.4642 16.7989 35.0952 17.1846 35.5071 17.9287C36.1427 19.1171 36.3074 20.4175 36.3409 21.7299C36.3383 22.1898 36.3358 22.6497 36.3107 23.0958C40.5282 25.0589 45.4718 23.2517 46.0026 18.8388C46.2819 19.0403 46.5435 19.1695 46.6239 19.3417C46.7132 19.5501 46.6528 19.8515 46.5746 20.0806C45.7716 22.2044 44.4647 23.8357 42.1777 24.437C40.4703 24.9005 38.7565 24.8679 37.0131 24.4788C36.7692 24.422 36.5253 24.3652 36.2677 24.3308C36.2452 24.317 36.1953 24.348 36.0729 24.3962C35.9723 24.6116 35.8217 24.8579 35.7162 25.1317C34.3549 28.4217 32.5854 29.4932 28.9197 29.1594C28.8456 29.4832 28.7441 29.8518 28.6788 30.2118C28.2106 32.2942 27.2015 34.046 25.5478 35.4344C22.8627 37.6996 19.2838 38.0341 16.0507 36.3344C14.2922 35.4131 12.8476 34.13 11.6398 32.561C8.73486 28.7548 7.2162 24.504 7.4734 19.6779C7.47025 19.4298 7.50331 19.1732 7.50016 18.9252C7.49131 18.889 7.45993 18.839 7.36579 18.6892C6.72005 19.3403 6.34958 20.0982 5.95658 20.8423C5.55472 21.5503 5.18425 22.3082 4.76387 23.0971C4.21902 22.6717 4.18533 22.2204 4.28285 21.7571C4.42144 21.2266 4.51495 20.6685 4.76622 20.2069C5.4604 18.9701 6.19081 17.7248 7.01136 16.5345C7.66763 15.613 8.35022 15.6611 8.87884 16.5688C9.98515 18.5064 11.0778 20.4664 12.1704 22.4264C12.345 22.7484 12.4471 23.0877 12.612 23.5269C11.8562 23.6493 11.6051 23.2497 11.3629 22.8863C10.5293 21.5154 9.65468 20.2116 8.69474 18.7941ZM34.1636 17.9994C33.4218 19.6685 33.8247 21.2376 35.1808 22.1589C35.1345 20.7156 35.1284 19.3583 34.1636 17.9994ZM26.0435 23.4327C25.5513 24.9467 26.0694 26.1248 27.5261 26.8308C27.3252 25.539 27.1009 24.3868 26.0435 23.4327Z"
                  fill="#E6E6E6"
                />
              </g>
              <defs>
                <clipPath id="clip0_1106_5483">
                  <rect
                    width="30.5776"
                    height="35.8332"
                    fill="white"
                    transform="translate(47.124 19.5244) rotate(121.44)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Flex>
          <Flex mt={"10px"} align={"center"} gap={"4px"}>
            <Box
              {...Typography.Caption_Regular}
              color={colorMode === "light" ? Color.ColorNatural.Natural6 : ""}
            >
              Read more about Dinky Life
            </Box>
            <Box>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1214_7180)">
                  <path
                    d="M8.086 5.50008L5.404 2.81808L6.111 2.11108L10 6.00008L6.111 9.88908L5.404 9.18208L8.086 6.50008H2V5.50008H8.086Z"
                    fill="#FDAC11"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1214_7180">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
          </Flex>
        </Flex>
      </Container>
      <Box >
        <Box mt={"-30px"} as="img" src={Mask} mx={0}></Box>
        <Box
          mt={"-30px"}
          as="img"
          src={banner}
          pos={"absolute"}
          right={"0"}
          bottom={"13px"}
        ></Box>
      </Box>
    </Flex>
  );
};

export default MainBanner;
