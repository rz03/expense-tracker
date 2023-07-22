import React from "react";
import { ExpenseCard } from "./ExpenseCard";
import { SimpleGrid, Text } from "@chakra-ui/react";

export const ExpenseList = () => {
  return (
    <SimpleGrid>
      <Text fontSize="xl" fontWeight="light" px="6">
        Recent Expenses
      </Text>
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
    </SimpleGrid>
  );
};
