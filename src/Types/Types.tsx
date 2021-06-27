//initial state type
export type InitialStateTypes = {
    Transaction:{
            id: number;
            category: string;
            amount: number;
    }[];
    deleteTransaction: (id: number) => void;
    addTransaction: (transaction: TransactionTypes) => void;
};
//context/TransactionReducer Actions Type
export type ActionTypes =
    | { type: "Delete_Transaction"; payload: number }
    | { type: "Add_Transaction"; payload: TransactionTypes };

// transaction Type
export type TransactionTypes = {
    id: number;
    category: string;
    amount: number;
};

//components/Trasaction.tsx props type
export type TransactionPropType = {
    trans: { id: number; category: string; amount: number };
};