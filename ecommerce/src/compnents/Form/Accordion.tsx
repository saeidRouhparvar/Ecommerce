import React, { Children } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  BoxProps,
} from "@chakra-ui/react";

interface Interface extends BoxProps {
  reset?: any;
  title?: string;
  children?: string;
}

const DropDown = ({ title, children, ...reset }: Interface) => {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default DropDown;
