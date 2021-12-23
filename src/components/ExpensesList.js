import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function ExpensesList(props) {
  let items = props.expenses.map((item) => {
    let day = item.date.getDate();
    let year = item.date.getFullYear();
    let month = item.date.getMonth();
    let price = item.price;
    let name = item.name;
    return (
      <ExpenseItem
        year={year}
        month={month}
        day={day}
        price={price}
        name={name}
      />
    );
  });
  return (
    //  <!--  expenses -->
    <div class="row m-3 p-2 border border-3 border-primary rounded-2">
      <h2 class="m-3 fs-2">Expenses</h2>

      {/* <!--  expenses list    --> */}
      <div class="d-flex flex-column justify-content-around text-light">
        {/* expense item */}
        {items}
      </div>
    </div>
  );
}

export default ExpensesList;
