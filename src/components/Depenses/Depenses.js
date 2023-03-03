import React, { useState } from "react";
import "./Depenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import DepensesList from "./DepensesList";
import DepensesGraph from "./DepensesGraph";

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
        <DepensesGraph depenses={depensesFiltrees} />
        <DepensesList items={depensesFiltrees} />
      </Card>
    </div>
  );
};

export default Depenses;
