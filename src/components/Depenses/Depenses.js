import React, { useState } from "react";
import "./Depenses.css";
import Card from "../UI/Card";
import DepenseItem from "./DepenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Depenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const depensesFiltrees = props.items.filter(depense => {
    return depense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>Aucune dépense trouvée</p>

  // if (depensesFiltrees.length > 0) {
  //   expensesContent = depensesFiltrees.map((depense) => (
  //     <DepenseItem
  //       // key est un mot clé permettant à React d'identifier chaque élément grâce à l'id qu'on lui a donné
  //       key ={depense.id}
  //       titre={depense.titre}
  //       montant={depense.montant}
  //       date={depense.date}
  //     />
  //   ))
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {depensesFiltrees.map((depense) => (
          <DepenseItem
            // key est un mot clé permettant à React d'identifier chaque élément grâce à l'id qu'on lui a donné
            key ={depense.id}
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
