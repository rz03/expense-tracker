import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./Context/AppContext";
import { LoginContextProvider } from "./Context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <LoginContextProvider>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </LoginContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
