import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { filterEntries, processDate } from "../../helpers";
import "./ExpenseList.css";

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
    <div className="expenses">
      <h2 className="expense-list-heading">Expenses</h2>

      {/* <!--  expenses list    --> */}
      <div className="expenses-list">
        {/* expense item */}
        {items.length ? (
          items
        ) : (
          <div className="expenses-no-text">
            <p> New expenses will show up here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpensesList;
