import React, { useContext } from 'react';
import "../App.css";
import { GlobalContext } from '../Context/GlobalState';

const Balance: React.FC = () => {
const { Transaction } = useContext(GlobalContext);

const amount = Transaction.map((amounts) => amounts.amount);
const total = amount.reduce((v1,v2) => (v1 += v2), 0).toFixed(2);

    return(
        <>
            <h4>Your Balance</h4>
            <h1>PKR {total}</h1>
        </>
    );
}

export default Balance;