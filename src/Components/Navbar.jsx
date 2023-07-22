import React from "react";
import { Heading, WrapItem, Avatar, Wrap, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <Wrap justify="space-between" align="center" px="6" pt="4" pb="7">
      <Heading as="h2" size="xl">
        Home
      </Heading>
      <Button
        variant="outline"
        rightIcon={<AddIcon />}
        color="white"
        colorScheme=""
      >
        Expense
      </Button>

      <WrapItem>
        <Avatar
          size="md"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </WrapItem>
    </Wrap>
  );
};
