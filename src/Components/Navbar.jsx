import React from "react";
import {
  Heading,
  WrapItem,
  Avatar,
  Wrap,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  PopoverContent,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Wrap justify="space-between" align="center" px="6" pt="4" pb="7">
      <Heading as="h2" size="xl">
        Home
      </Heading>

      <Button onClick={onOpen} colorScheme="orange">
        Add Expense
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent border="1px solid white">
          <ModalHeader>Enter the Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Expense Name</FormLabel>
              <Input placeholder=" Expense Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input placeholder="Amount" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>When You have to Pay / Paid</FormLabel>
              <Input placeholder="Due" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Duration</FormLabel>
              <Input placeholder="Duration  (i.e. monthly, one time or any other)" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Popover>
        <PopoverTrigger>
          <WrapItem>
            <Avatar
              size="md"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Do you want to Logout ? </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody display="flex" justifyContent="space-evenly">
            <Button colorScheme="orange" variant="outline">
              Logout
            </Button>
            <Button colorScheme="orange">Cancel</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Wrap>
  );
};
