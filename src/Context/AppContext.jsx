import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  user: "Tushar",
  expenses: [
    {
      id: 12,
      name: "shopping",
      cost: 4000,
      due: "one time",
      duration: "today",
    },
    {
      id: 13,
      name: "holiday",
      cost: 10000,
      due: "one time",
      duration: "today",
    },
    {
      id: 14,
      name: "car service",
      cost: 1000,
      due: "one time",
      duration: "today",
    },
  ],
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
