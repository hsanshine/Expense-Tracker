import React from "react";

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
      <div
        class="
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
        <div class="fw-bold text-capitalize fs-6 mt--3">Nov</div>

        <div class="fs-6">2021</div>
        <div class="fs-1">24</div>
      </div>
      {/* <!--      items name    --> */}
      <div class="fw-bold col m-auto text-capitalize">items name</div>
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
          $ 20000
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
