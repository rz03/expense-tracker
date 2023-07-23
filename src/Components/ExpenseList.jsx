import React, { useContext } from "react";
import { ExpenseCard } from "./ExpenseCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";

export const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <SimpleGrid>
      <Text fontSize="xl" fontWeight="light" px="6" py="4">
        Recent Expenses
      </Text>
      {expenses.map((expense) => {
        return (
          <ExpenseCard
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            due={expense.due}
            duration={expense.duration}
          />
        );
      })}
    </SimpleGrid>
  );
};
