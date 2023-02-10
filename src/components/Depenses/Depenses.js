import React, { useState } from "react";
import "./Depenses.css";
import Card from "../UI/Card";
import DepenseItem from "./DepenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Depenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear = selectedYear;
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((depense) => (
          <DepenseItem
            titre={depense.titre}
            montant={depense.montant}
            date={depense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Depenses;
