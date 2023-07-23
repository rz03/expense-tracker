import React, { useContext, useState } from "react";
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
import { AppContext } from "../Context/AppContext";
import { LoginContext } from "../Context/LoginContext";
import { v4 as uuidv4 } from "uuid";

export const Navbar = () => {
  const { dispatch } = useContext(AppContext);
  const { handleLogin } = useContext(LoginContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [due, setDue] = useState("");
  const [duration, setDuration] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name, cost);

    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
      due,
      duration,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

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
          <form onSubmit={handleSubmit}>
            <ModalHeader>Enter the Expense</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Expense Name</FormLabel>
                <Input
                  placeholder=" Expense Name"
                  required="required"
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Amount</FormLabel>
                <Input
                  placeholder="Amount"
                  required="required"
                  type="text"
                  onChange={(event) => setCost(event.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>When You have to Pay / Paid</FormLabel>
                <Input
                  placeholder="Due"
                  required="required"
                  type="text"
                  onChange={(event) => setDue(event.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Duration</FormLabel>
                <Input
                  placeholder="Duration  (i.e. monthly, one time or any other)"
                  required="required"
                  type="text"
                  onChange={(event) => setDuration(event.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="orange"
                mr={3}
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                colorScheme="orange"
                mr={3}
                type="submit"
                onClick={onClose}
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
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
            <Button
              colorScheme="orange"
              variant="outline"
              onClick={handleLogin}
            >
              Logout
            </Button>
            <Button colorScheme="orange" onClick={onClose}>
              Cancel
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Wrap>
  );
};
