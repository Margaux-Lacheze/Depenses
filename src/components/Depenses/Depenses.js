import React, {useState} from 'react';
import "./Depenses.css";
import Card from "../UI/Card";
import DepenseItem from "./DepenseItem";
import ExpenseFilter from './ExpenseFilter';

const Depenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = selectedYear => {
    setFilteredYear = selectedYear;
  };
  return (
    <div>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <DepenseItem
            titre={props.items[0].titre}
            montant={props.items[0].montant}
            date={props.items[0].date}
          />
          <DepenseItem
            titre={props.items[1].titre}
            montant={props.items[1].montant}
            date={props.items[1].date}
          />
          <DepenseItem
            titre={props.items[2].titre}
            montant={props.items[2].montant}
            date={props.items[2].date}
          />
          <DepenseItem
            titre={props.items[3].titre}
            montant={props.items[3].montant}
            date={props.items[3].date}
          />
        </Card>
    </div>
  );
}

export default Depenses;
