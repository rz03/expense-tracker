import React from "react";
import { Wrap, Text, Flex } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <Flex align="center" justify="space-between" pl="6" pr="6">
      <Wrap align="center">
        <SunIcon />
        <Text fontSize="md" fontWeight="light">
          Good Morning
        </Text>
      </Wrap>
      <Wrap align="center">
        <Text fontSize="2xl">Welcome, </Text>
        <Text fontSize="2xl" fontWeight="bold" color="#e35933">
          Tushar
        </Text>
      </Wrap>
    </Flex>
  );
};
