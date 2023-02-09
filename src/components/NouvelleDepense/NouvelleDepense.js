import React from 'react';
import DepenseForm from './DepenseForm';
import './NouvelleDepense.css';

const NouvelleDepense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
    <div className='new-expense'>
        <DepenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );
};

export default NouvelleDepense;