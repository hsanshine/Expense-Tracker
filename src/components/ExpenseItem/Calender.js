import React from "react";
import { monthName } from "../../helpers";
import "./Calender.css";

function Calender({ year, day, month }) {
  if (day < 10) day = "0" + day;
  return (
    <div
      //   className="
      //             d-flex
      //             flex-column
      //             justify-content-evenly
      //             m-3
      //             bg-primary
      //             p-5
      //             align-items-center
      //             col-3
      //             text-light
      //             calendar
      //           "
      //
      className="calender"
    >
      <div className="calender-month">{monthName(month)}</div>

      <div className="calender-year">{year}</div>
      <div className="calender-date">{day}</div>
    </div>
  );
}

export default Calender;
