import React from "react";

function MonthPlot(props) {
  let plotHeight = (props.value / props.maxValue) * 100 + "%";
  return (
    <div class="mx-auto d-flex flex-column align-items-center month">
      {/* <!--    outer bar      --> */}
      <div
        class="
                rounded rounded-pill
                bg-dark
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
          class="bg-light rounded-pill inner-bar"
          style={{
            height: plotHeight,
          }}
        ></div>
      </div>
      <div class="mx-auto text-dark fs-6 month">
        <span class="full-month"> {props.monthName}</span>
      </div>
    </div>
  );
}

export default MonthPlot;
