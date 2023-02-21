import React from "react";
import "./DepensesList.css";
import DepenseItem from "./DepenseItem";

const DepensesList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Aucune dépense trouvée.</h2>
    }

    return <ul className="expenses-list">
        {props.items.map((depense) => (
            <DepenseItem
            // key est un mot clé permettant à React d'identifier chaque élément grâce à l'id qu'on lui a donné
            key ={depense.id}
            titre={depense.titre}
            montant={depense.montant}
            date={depense.date}
            />
      ))}
    </ul>
};

export default DepensesList;