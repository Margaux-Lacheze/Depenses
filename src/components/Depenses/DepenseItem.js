import React, { useState } from 'react';
import DepenseDate from "./DepenseDate";
import Card from "../UI/Card";
import "./DepenseItem.css";


const DepenseItem = (props) => {
 const [titre, setTitre] = useState(props.titre);


  const clickHandler = () => {
   setTitre('Updated!');
  };

  return (
    <Card className="depense-item">
      <DepenseDate date={props.date}/>
      <div className="depense-item__description">
        <h2>{titre}</h2>
        <div className="depense-item__prix">{props.montant}€</div>
      </div>
      <button onClick={clickHandler}>Changer le titre</button>
    </Card>
  );
}

export default DepenseItem;
