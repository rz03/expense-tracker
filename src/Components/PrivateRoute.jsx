import { useContext, useEffect } from "react";
import { LoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      return navigate("/");
    }
  });
  return children;
};
