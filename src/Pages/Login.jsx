import React from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { Text, Flex, Wrap } from "@chakra-ui/react";

export const Login = () => {
  return (
    <Flex
      flexDirection="column"
      p="6"
      mx="10"
      my="80"
      boxShadow="0 4px 6px rgba(60, 60, 60, 0.1), 0 2px 4px rgba(60, 60, 60, 0.06)"
      rounded="md"
    >
      <Wrap
        justify="space-between"
        align="center"
        fontWeight="black"
        fontSize="2xl"
        p="4"
      >
        <Text>Your Name</Text>
      </Wrap>
      <Wrap
        justify="space-between"
        align="center"
        fontWeight="light"
        fontSize="md"
        px="4"
      >
        <FormControl>
          <Input type="email" />
        </FormControl>
        <Button mt={4} colorScheme="orange" type="submit">
          Login
        </Button>
      </Wrap>
    </Flex>
  );
};
