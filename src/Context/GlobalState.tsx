import React, { createContext, useReducer } from 'react';
import { TransactionTypes, InitialStateTypes } from '../Types/Types';
import { AppReducer } from './reducer';

// Creating Global State
const initailState: InitialStateTypes = {
    Transaction: [{ id: 1, category: "Cash", amount: 200 }],
    deleteTransaction: () => { },
    addTransaction: () => { }
}

export const GlobalContext = createContext(initailState);

export const GlobalProvider: React.FC = ({ children }: any) => {
    const [state, dispatch] = useReducer(AppReducer, initailState);

    function deleteTransaction(id: number) {
        dispatch({
            type: "Delete_Transaction",
            payload: id,
        });
    }

    function addTransaction(transactionValues: TransactionTypes) {
        dispatch({
            type: "Add_Transaction",
            payload: transactionValues,
        });
    }

    return (
        <GlobalContext.Provider value={{
            Transaction: state.Transaction,
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}