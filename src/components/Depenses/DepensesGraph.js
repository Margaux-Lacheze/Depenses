import React from "react";
import Graph from "../Graph/Graph";

const DepensesGraph = props => {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Fev', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Avr', value: 0},
        {label: 'Mai', value: 0},
        {label: 'Jui', value: 0},
        {label: 'Jui', value: 0},
        {label: 'Aou', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];

    for (const depense of props.depenses) { // for OF et non for IN car c'est un tableau et non un objet
        const depenseMois = depense.date.getMonth(); // commence à 0 comme le tableau chartDataPoints
        chartDataPoints[depenseMois].value += depense.montant;
    }


     return <Graph dataPoints={chartDataPoints}/>
};

export default DepensesGraph;