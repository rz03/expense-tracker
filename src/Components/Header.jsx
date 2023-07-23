import React from "react";
import { Wrap, Text, Flex } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

export const Header = () => {
  const date = new Date();
  const time = date.getHours();

  let greet = "Good Evening";
  if (time >= 4 && time < 12) {
    greet = "Good Morning";
  }
  if (time >= 12 && time < 16) {
    greet = "Good Afternoon";
  }
  return (
    <Flex align="center" justify="space-between" pl="6" pr="6">
      <Wrap align="center">
        <SunIcon />
        <Text fontSize="md" fontWeight="light">
          {greet}
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
