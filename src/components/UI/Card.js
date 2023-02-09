import React from 'react';
import "./Card.css";

 const Card = (props) => {
    // Tout ce qui est reçu comme classname est ajouté au string classname de la div
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;