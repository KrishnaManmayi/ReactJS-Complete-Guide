import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalAmount = dataPointValues.reduce((prev, current) => {
    return prev + current;
  }, 0);
  console.log(props.dataPoints);
  console.log(totalAmount);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalAmount={totalAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
