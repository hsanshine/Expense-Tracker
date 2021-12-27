import React from "react";
import { monthName } from "../../helpers";

function Calender({ year, day, month }) {
  return (
    <div
      className="
                d-flex
                flex-column
                justify-content-evenly
                m-3
                bg-primary
                p-5
                align-items-center
                col-3
                text-light
                calendar
              "
    >
      <div className="fw-bold text-capitalize fs-6 mt-3 mb-1">
        {monthName(month)}
      </div>

      <div className="fs-6">{year}</div>
      <div className="fs-1 mb-3">{day}</div>
    </div>
  );
}

export default Calender;
