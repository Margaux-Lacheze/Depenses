import React, {useState} from 'react';

import Depenses from "./components/Depenses/Depenses";
import NouvelleDepense from './components/NouvelleDepense/NouvelleDepense';

const DUMMY_EXPENSES = [
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

const App = () => {
  // passer l'array en état initial
  const [depenses, setDepenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = depense => {
    //maj state quand basé sur ancienne version d'un state
    setDepenses(prevDepenses => {
      return [depense, ...prevDepenses]
    }
    );
  };
  return (
    <div>
      <NouvelleDepense onAddExpense={addExpenseHandler}/>
      <Depenses items={depenses}/>
    </div>
  );
}

export default App;
