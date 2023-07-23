import React, { useContext } from "react";
import { Wrap, Text, Flex } from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";

export const Total = () => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <Flex p="6" mt="4" flexDirection="column" align="center">
      <Wrap align="center">
        <Text fontSize="xl" fontWeight="200">
          Total Spend
        </Text>
      </Wrap>
      <Wrap align="center">
        <Text fontSize="6xl">₹{totalExpense}</Text>
      </Wrap>
    </Flex>
  );
};
