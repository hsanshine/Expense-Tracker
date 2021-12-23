import React from "react";
import MonthPlot from "./MonthPlot";

let maxValue = 10;
let dataPoints = [
  {
    monthName: "Jan",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Feb",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Mar",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Apr",
    value: Math.random() * maxValue,
  },
  {
    monthName: "May",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Jun",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Jul",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Aug",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Sept",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Oct",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Nov",
    value: Math.random() * maxValue,
  },
  {
    monthName: "Dec",
    value: Math.random() * maxValue,
  },
];

let monthNames = [
  "Jan",
  "Feb",
  "Apr",
  "Mar",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// let months = [];

// months = monthNames.map((name) => <MonthPlot monthName={name} />);
let monthsPlot = dataPoints.map((point) => (
  <MonthPlot
    monthName={point.monthName}
    value={point.value}
    maxValue={maxValue}
  />
));

// for (let i = 0; i < 12; i++) months.push(<MonthPlot />);

function ExpensesChart() {
  return (
    <div class="p-3 m-3 rounded-3 bg-primary text-white">
      <div className="d-flex">
        <h2 className="m-3">chart area</h2>
        <div className="ms-auto my-auto me-3 fw-bold"> 2022</div>
      </div>

      {/* <!--  chart background    --> */}
      <div class="bg-warning p-2 chart-background">
        {/* <!--    single month bar    --> */}
        {monthsPlot}

        {/* <!-- #####################################################      --> */}

        {/* <!--   end of months    --> */}
      </div>
    </div>
  );
}

export default ExpensesChart;
