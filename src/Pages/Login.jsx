import React, { useContext, useState } from "react";
import {
  FormControl,
  Input,
  Button,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Text, Flex, Wrap } from "@chakra-ui/react";
import { LoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export const Login = () => {
  const { handleLogin } = useContext(LoginContext);
  const { dispatch } = useContext(AppContext);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (userName.trim() !== "") {
      handleLogin();
      dispatch({
        type: "SET_USER",
        payload: userName,
      });
      navigate("/home");
    }
  };

  const isError = userName === "";

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
        <FormControl isInvalid={isError}>
          <Input
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
          {!isError ? (
            <FormHelperText>
              Enter the name to track your expense.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={4}
          colorScheme="orange"
          type="submit"
          onClick={handleLoginClick}
        >
          Login
        </Button>
      </Wrap>
    </Flex>
  );
};
