import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { TransactionPropType } from '../Types/Types';

const Transactions: React.FC<TransactionPropType> = ({ trans }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = trans.amount < 0 ? "-" : "+";

    return(
        <li className={trans.amount < 0 ? "minus" : "plus"}>
            {trans.category}<span>{sign} PKR{Math.abs(trans.amount)}</span><button onClick={() => deleteTransaction(trans.id)} className={`delete-btn ${trans.amount < 0 ? "del-red" : "del-green"}`}>x</button>
        </li>
    )
}

export default Transactions;