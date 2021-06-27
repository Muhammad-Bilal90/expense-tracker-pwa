import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { TransactionTypes } from '../Types/Types';

const AddTransaction: React.FC = () => {
    const [category,setCategory] = useState<string>("");
    const [amount,setAmount] = useState<number>(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        const newTransactions: TransactionTypes = {
            id: Math.floor(Math.random() * 1000000),
            category: category,
            amount: +amount,
        }

        addTransaction(newTransactions);
        setCategory("");
        setAmount(0);
    }

    return (
        <>
            <h3>Add Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="category">category</label>
                    <input type="text" placeholder="Add transactions cause here" required value={category} onChange={(e) => setCategory(String(e.target.value))} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (Negative - Expense, Positive - Income)</label>
                    <input type="number" placeholder="Add transactions amount here (digits only)" required value={amount === 0 ? "" : amount} onChange={(e) => setAmount(Number(e.target.value))} />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}

export default AddTransaction;