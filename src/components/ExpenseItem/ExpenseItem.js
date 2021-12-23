import React from "react";
import Calender from "./Calender";

function ExpenseItem(props) {
  return (
    <div
      class="
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
      <div class="fw-bold col m-auto text-capitalize"> {props.name}</div>
      {/* <!--    item price      --> */}

      <div class="col my-auto ms-auto me-2 d-flex justify-content-end">
        <div
          class="
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
