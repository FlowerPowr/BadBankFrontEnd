
import React from "react";
import { useActions } from "./action";

export const Store = React.createContext();

const initialState = {
  users: [
    {
     
      name: "Taylor Jones",
      email: "taylorjones@gmail.com",
      password: "bduhewiu",
      balance: 1000000000,
      transactionHistory: [909900]
    },
  
    {
      name: "Achepe",
      email: "achepeiscute@hotmail.com",
      password: "pawsforlife",
      balance: 30000,
      transactionsHistory: [79827]
    },
    {
      name: "Dayana",
      email: "dayana.h@mit.edu",
      password: "helloworldofficial",
      balance: 5890000000,
      transactionsHistory: [88080876]
    },
    
  ],
  currentUser: null,
  success: false,
  showError: false,
};

const reducer = (state, action) => {
  return (
    {
      ADD_USER: { ...state, users: action.payload },
      LOGIN: { ...state, currentUser: action.payload },
      UPDATE_USERS: { ...state, users: action.payload },
      UPDATE_USER: { ...state, currentUser: action.payload },
      SET_SUCCESS: { ...state, success: action.payload },
      SET_ERROR: { ...state, error: action.payload },
    }[action.type] || state
  );
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);
  const value = { state, dispatch, actions };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}


