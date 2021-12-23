import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function ExpensesList() {
  return (
    //  <!--  expenses -->
    <div class="row m-3 p-2 border border-3 border-primary rounded-2">
      <h2 class="m-3 fs-2">Expenses</h2>

      {/* <!--  expenses list    --> */}
      <div class="d-flex flex-column justify-content-around text-light">
        {/* expense item */}
        <ExpenseItem />
      </div>
    </div>
  );
}

export default ExpensesList;
