import React, { useState, useEffect, useContext } from "react";
import { Wrap, Text, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AppContext } from "../Context/AppContext";

export const Header = () => {
  const { user } = useContext(AppContext);
  const [isDay, setIsDay] = useState(true);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateDayNight = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsDay(hour >= 6 && hour < 18);

      if (hour >= 4 && hour < 12) {
        setGreeting("Good Morning !");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Good Afternoon !");
      } else if (hour >= 18 || hour < 4) {
        setGreeting("Good Evening !");
      }
    };
    updateDayNight();
    const timeout = setTimeout(updateDayNight, 60000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Flex align="center" justify="space-between" pl="6" pr="6">
      <Wrap align="center">
        {isDay ? <SunIcon /> : <MoonIcon />}
        <Text fontSize="md" fontWeight="light">
          {greeting}
        </Text>
      </Wrap>
      <Wrap align="center">
        <Text fontSize="2xl">Welcome, </Text>
        <Text fontSize="2xl" fontWeight="bold" color="#e35933">
          {user.charAt(0).toUpperCase() + user.slice(1)}
        </Text>
      </Wrap>
    </Flex>
  );
};
