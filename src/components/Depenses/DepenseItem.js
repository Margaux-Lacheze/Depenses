import ReactDOM from 'react-dom/client';
import DepenseDate from "./DepenseDate";
import Card from "../UI/Card";
import "./DepenseItem.css";


function DepenseItem(props) {
  return (
    <Card className="depense-item">
      <DepenseDate date={props.date}/>
      <div className="depense-item__description">
        <h2>{props.titre}</h2>
        <div className="depense-item__prix">{props.montant}€</div>
      </div>
    </Card>
  );
}

export default DepenseItem;
