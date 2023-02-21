import React, { useState } from 'react';
import DepenseDate from "./DepenseDate";
import Card from "../UI/Card";
import "./DepenseItem.css";


const DepenseItem = (props) => {

  return (
    <li>
      <Card className="depense-item">
        <DepenseDate date={props.date}/>
        <div className="depense-item__description">
          <h2>{props.titre}</h2>
          <div className="depense-item__prix">{props.montant}€</div>
        </div>
      </Card>
    </li>
  );
}

export default DepenseItem;
