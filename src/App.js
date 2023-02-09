import React from 'react';

import Depenses from "./components/Depenses/Depenses";
import NouvelleDepense from './components/NouvelleDepense/NouvelleDepense';

const App = () => {
  const depenses = [
    {
      id: 'e1',
      titre: 'Assurance voiture', 
      montant: 107.5, 
      date: new Date(2022, 2, 28)
    },
    {
      id: 'e2',
      titre: 'Frais vétérinaire', 
      montant: 355.7, 
      date: new Date(2021, 9, 15)
    },
    {
      id: 'e3',
      titre: 'Chauffage', 
      montant: 87.9, 
      date: new Date(2020, 11, 5)
    },
    {
      id: 'e4',
      titre: 'Nourriture', 
      montant: 200.46, 
      date: new Date(2020, 6, 16)
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div>
      <NouvelleDepense onAddExpense={addExpenseHandler}/>
      <Depenses items={depenses}/>
    </div>
  );
}

export default App;
