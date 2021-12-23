import React from "react";

function Calender(props) {
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
      <div className="fw-bold text-capitalize fs-6 mt--3">Nov</div>

      <div className="fs-6">{props.year}</div>
      <div className="fs-1">{props.day}</div>
    </div>
  );
}

export default Calender;
