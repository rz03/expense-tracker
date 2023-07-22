import React from "react";
import { Wrap, Text, Flex } from "@chakra-ui/react";

export const Total = () => {
  return (
    <Flex p="6" mt="4" flexDirection="column" align="center">
      <Wrap align="center">
        <Text fontSize="xl" fontWeight="200">
          Total Spend
        </Text>
      </Wrap>
      <Wrap align="center">
        <Text fontSize="6xl">₹5000</Text>
      </Wrap>
    </Flex>
  );
};
