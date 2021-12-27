import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import { filterEntries } from "../helpers";

function ExpensesList({ expenses, displayYear }) {
  expenses.sort((a, b) => a.date - b.date);
  let filteredExpenses = filterEntries(expenses, displayYear);
  let items = filteredExpenses.map((item) => {
    let key = item.id;
    let day = item.date.getDate();
    let year = item.date.getFullYear();
    let month = item.date.getMonth();
    let price = item.price;
    let name = item.name;
    return (
      <ExpenseItem
        key={key}
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
    <div className="row m-3 p-2 border border-3 border-primary rounded-2">
      <h2 className="m-3 fs-2">Expenses</h2>

      {/* <!--  expenses list    --> */}
      <div className="d-flex flex-column justify-content-around text-light">
        {/* expense item */}
        {items.length ? (
          items
        ) : (
          <div className="text-primary fw-bold">
            <p> No Items to display</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpensesList;
