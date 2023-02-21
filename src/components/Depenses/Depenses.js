import React, { useState } from "react";
import "./Depenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import DepensesList from "./DepensesList";

const Depenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const depensesFiltrees = props.items.filter(depense => {
    return depense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <DepensesList items={depensesFiltrees}/>
      </Card>
    </div>
  );
};

export default Depenses;
