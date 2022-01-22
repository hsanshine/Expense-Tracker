import React from "react";
import { monthName } from "../../helpers";

function MonthPlot({ month, value, maxValue }) {
  let plotHeight = maxValue ? (value / maxValue) * 100 + "%" : 0;
  return (
    <div className="mx-auto d-flex flex-column align-items-center month">
      {/* <!--    outer bar      --> */}
      <div
        className="
                rounded rounded-pill
                mx-auto
                my-1
                outer-bar
                d-flex
                flex-column
                justify-content-end
              "
      >
        {/* <!--   inner bar         --> */}
        <div
          className="bg-light rounded-pill inner-bar"
          style={{
            height: plotHeight,
          }}
        ></div>
      </div>
      <div className="mx-auto text-dark fs-6 month">
        <span className="full-month"> {monthName(month)}</span>
        <span className="short-month">{monthName(month)[0]}</span>
      </div>
    </div>
  );
}

export default MonthPlot;
