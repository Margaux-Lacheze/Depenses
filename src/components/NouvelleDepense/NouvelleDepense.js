import React, {useState} from 'react';
import DepenseForm from './DepenseForm';
import './NouvelleDepense.css';

const NouvelleDepense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Ajouter une nouvelle dépense</button>}
        {isEditing && <DepenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
    );
};

export default NouvelleDepense;