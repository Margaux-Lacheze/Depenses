import ReactDOM from 'react-dom/client';
import "./DepenseDate.css";

function DepenseDate(props) {
  const annee = props.date.getFullYear();
  const mois = props.date.toLocaleString("fr-FR", { month: "long" });
  const jour = props.date.toLocaleString("fr-FR", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{jour}</div>
      <div className="expense-date__month">{mois}</div>
      <div className="expense-date__year">{annee}</div>
    </div>
  );
}

export default DepenseDate;
