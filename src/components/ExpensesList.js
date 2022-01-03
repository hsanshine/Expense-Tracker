import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import { filterEntries, processDate } from "../helpers";

function ExpensesList({ expenses, displayYear, onEdit, onTrash }) {
  expenses.sort((a, b) => a.date - b.date);
  const filteredExpenses = filterEntries(expenses, displayYear);
  const items = filteredExpenses.map((item) => {
    const key = item.id;
    const [year, month, day] = processDate(item.date);
    const price = item.price;
    const name = item.name;
    return (
      <ExpenseItem
        id={item.id}
        key={key}
        year={year}
        month={month}
        day={day}
        price={price}
        name={name}
        onEdit={onEdit}
        onTrash={onTrash}
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
            <p> New expenses will show up here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpensesList;
