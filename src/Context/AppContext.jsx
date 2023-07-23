import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  expenses: [
    { id: 12, name: "shopping", cost: 4000 },
    { id: 13, name: "holiday", cost: 10000 },
    { id: 14, name: "car service", cost: 1000 },
  ],
};

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
