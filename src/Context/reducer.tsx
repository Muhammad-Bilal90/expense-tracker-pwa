import { TransactionTypes, ActionTypes } from '../Types/Types';

export const AppReducer = (state: { Transaction: TransactionTypes[] }, action: ActionTypes) => {
    switch (action.type) {
        case "Add_Transaction":
            return {
                ...state,
                Transaction: [action.payload, ...state.Transaction],
            };
        case "Delete_Transaction":
            return {
                ...state,
                Transaction: state.Transaction.filter((transaction) => transaction.id !== action.payload),
            };    
            default:
                return state;
    }
};