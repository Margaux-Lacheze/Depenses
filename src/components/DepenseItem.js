import DepenseDate from "./DepenseDate";
import "./DepenseItem.css";

function DepenseItem(props) {
  return (
    <div className="depense-item">
      <DepenseDate date={props.date}/>
      <div className="depense-item__description">
        <h2>{props.titre}</h2>
        <div className="depense-item__prix">{props.montant}€</div>
      </div>
    </div>
  );
}

export default DepenseItem;
