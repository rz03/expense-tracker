import React from "react";
import { Navbar } from "../Components/Navbar";
import { Header } from "../Components/Header";
import { Total } from "../Components/Total";
import { ExpenseList } from "../Components/ExpenseList";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Total />
      <ExpenseList />
    </div>
  );
};
