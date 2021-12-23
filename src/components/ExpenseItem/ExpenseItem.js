import React from "react";
import Calender from "./Calender";

function ExpenseItem(props) {
  return (
    <div
      className="
          expense-item
              row row-col-3
              border border-dark
              bg-secondary
              mx-2
              mb-3
              rounded-3
            "
    >
      {/* <!--      calender    --> */}
      <Calender day={props.day} month={props.month} year={props.year} />
      {/* <!--      items name    --> */}
      <div className="fw-bold col m-auto text-capitalize"> {props.name}</div>
      {/* <!--    item price      --> */}

      <div className="col my-auto ms-auto me-2 d-flex justify-content-end">
        <div
          className="
                  fw-bold
                  py-2
                  d-flex
                  justify-content-center
                  px-auto
                  border border-2 border-light
                  rounded-pill
                  expense-price
                "
        >
          {"$" + props.price}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
