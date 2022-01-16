import React from "react";
import MonthPlot from "./MonthPlot";
import { useState, useEffect } from "react";
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
    <div className="p-3 m-3 rounded-3 bg-primary text-white">
      <div className="d-flex">
        <h2 className="m-3">chart area</h2>
        <div className="ms-auto my-auto me-3 fw-bold">{displayYear}</div>
      </div>
      <div className="bg-warning p-2 chart-background">{chartPlot}</div>
    </div>
  );
}

export default ExpensesChart;
