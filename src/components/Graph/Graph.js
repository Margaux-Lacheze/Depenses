import React from "react";

import GraphBar from './GraphBar';
import './Graph.css';

const Graph = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //return un nouveau tableau de nombre pour pouvoir utiliser Math.max() qui a besoin d'une liste de nombres
    const totalMaximum = Math.max(...dataPointValues);

    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <GraphBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
};

export default Graph;