import React from "react";
import {
  Text,
  Flex,
  Wrap,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
} from "@chakra-ui/react";

export const ExpenseCard = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Flex
          flexDirection="column"
          p="6"
          mx="6"
          my="4"
          boxShadow="0 4px 6px rgba(60, 60, 60, 0.1), 0 2px 4px rgba(60, 60, 60, 0.06)"
          rounded="md"
        >
          <Wrap
            justify="space-between"
            align="center"
            fontWeight="black"
            fontSize="2xl"
            px="3"
          >
            <Text>Rent</Text>
            <Text>₹5000</Text>
          </Wrap>
          <Wrap
            justify="space-between"
            align="center"
            fontWeight="light"
            fontSize="md"
            px="3"
          >
            <Text>Monthly</Text>
            <Text>due tomorrow</Text>
          </Wrap>
        </Flex>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          Do You want to Modify or Delete the expense ?
        </PopoverHeader>
        <PopoverBody display="flex" justifyContent="space-evenly">
          <Button colorScheme="orange" variant="outline">
            Delete
          </Button>
          <Button colorScheme="orange" variant="outline">
            Modify
          </Button>
          <Button colorScheme="orange">Cancel</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
