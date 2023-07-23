import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <LoginContext.Provider value={{ isLogin, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
