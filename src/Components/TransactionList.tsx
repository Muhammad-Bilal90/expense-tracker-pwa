import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transactions from './Transactions';
import { TransactionTypes } from '../Types/Types';

const TransactionList: React.FC = () => {
    const { Transaction } = useContext(GlobalContext);
    return(
        <>
            <h3>History</h3>
            <ul className="list">
                {Transaction.map((trans: TransactionTypes) => (<Transactions key={trans.id} trans={trans}/>))}
            </ul>
        </>
    );
}

export default TransactionList;