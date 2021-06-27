import React, { useContext } from "react";
import "../App.css";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpense: React.FC = () => {
    const { Transaction } = useContext(GlobalContext);
    const amounts = Transaction.map((transactions) => transactions.amount);
    const income: number = parseInt(
        amounts.filter(item => item > 0).reduce((v1, v2) => (v1 += v2), 0).toFixed(2)
    );
    const expense: number = parseInt(
        amounts.filter(item => item < 0).reduce((v1, v2) => (v1 += v2 * -1), 0).toFixed(2)
    );

return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">PKR {income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">PKR {expense}</p>
        </div>
    </div>
);
}

export default IncomeExpense;