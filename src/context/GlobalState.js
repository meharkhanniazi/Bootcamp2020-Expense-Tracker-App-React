import React, { createContext,useReducer } from 'react';

//Importing App Reducer
import AppReducer from './AppReducer';


//Creating Initial State
const initialState = {
    transactions: [
        {id:1,description:"Income 1",transactionAmount:1400},
        {id:2,description:"Expense 1",transactionAmount:-650},
        {id:3,description:"Income 2",transactionAmount:200},
        {id:4,description:"Expense 2",transactionAmount:-140}
    ]
}


//Create Global Context
export const GlobalContext = createContext(initialState);


//Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {

    const [state] = useReducer(AppReducer,initialState);

    return (
        <GlobalContext.Provider value={
            {
            transactions: state.transactions
            }
        }>
            { children }
        </GlobalContext.Provider>
    )
}