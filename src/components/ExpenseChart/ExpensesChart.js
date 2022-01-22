import React from "react";
import MonthPlot from "./MonthPlot";
import "./ExpenseChart.css";

import { filterEntries, dataPoints } from "../../helpers";

function ExpensesChart({ expenses, displayYear }) {
  //filter the data
  const filteredExpenses = filterEntries(expenses, displayYear);
  //process the data
  const dataPointsArray = dataPoints(filteredExpenses);
  const maxValue = Math.max(...dataPointsArray);
  //create the plot bars from the data
  const chartPlot = dataPointsArray.map((value, index) => {
    return (
      <MonthPlot key={index} month={index} value={value} maxValue={maxValue} />
    );
  });

  return (
    <div className="chart">
      <div className="chart-header">
        <h2>Chart area</h2>
        <div className="chart-year">{displayYear}</div>
      </div>
      <div className="chart-background">{chartPlot}</div>
    </div>
  );
}

export default ExpensesChart;
