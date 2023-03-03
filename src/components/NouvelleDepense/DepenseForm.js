import React, {useState} from 'react';

import './DepenseForm.css';

const DepenseForm = (props) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
   
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    //    setUserInput({
    //       //Dans l'approche où on gère plusiours états dans un seul objet, utiliser spread opérator pour copier les autres valeurs de l'objet sinon elles sont remplacées
    //        ...userInput,
     //       enteredTitle: event.target.value,
    //    });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            titre: enteredTitle,
            montant: enteredAmount,
            date: new Date(enteredDate)
        };
        // là on execute avec les parenthèses la fonction qui est dans parent
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Titre</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Montant</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2023-01-01' max='2026-12-31' value= {enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Annuler</button>
            <button type="submit">Ajouter dépense</button>
        </div>
    </form>
};

export default DepenseForm;