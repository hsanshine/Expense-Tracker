import { useState } from "react";
import React from "react";
import "./ExpenseForm.css";
function ExpenseForm({ onFormClose, onFormSubmit, name, price, date, id }) {
  const [itemName, setItemName] = useState(name);
  const [itemPrice, setItemPrice] = useState(price);
  const [itemDate, setItemDate] = useState(date);

  const itemNameHandler = (event) => {
    setItemName(event.target.value);
    // console.log("name was changed");
  };
  const itemPriceHandler = (event) => {
    setItemPrice(event.target.value);
    // console.log("price was changed!");
  };
  const itemDateHandler = (event) => {
    setItemDate(event.target.value);
    // console.log("date was changed");
  };
  const onCancelhandler = () => {
    setItemName("");
    setItemPrice("");
    setItemDate("");
    onFormClose();
    // console.log("form submit was canceled");
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      name: itemName,
      price: itemPrice,
      date: itemDate,
      id: id,
    };
    //console.log(newExpense);
    onFormSubmit(newExpense);
    onFormClose();
    setItemName("");
    setItemPrice("");
    setItemDate("");
    // console.log("form was submited");
  };
  return (
    <div className="expense-form">
      <form className="" onSubmit={onSubmitHandler}>
        <h2 className="expense-form-heading">
          {" "}
          {id ? "Edit Expense Form" : "New Expense Form"}
        </h2>
        <div className="expense-form-fields">
          <div className="expense-form-input">
            <input
              type="text"
              className="form-control"
              placeholder="Item name"
              id="expense-name"
              value={itemName}
              onChange={itemNameHandler}
              required
            />
          </div>

          <div className="input-group expense-form-input price-input">
            <span className="input-group-text">Price $</span>
            <input
              type="number"
              min="0"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={itemPrice}
              onChange={itemPriceHandler}
              required
            />
            <span className="input-group-text">.00</span>
          </div>

          <div className="expense-form-input date-input">
            <label htmlFor="expense-date">Date:</label>
            <input
              type="date"
              className="form-control"
              id="expense-date"
              placeholder={id ? itemDate : "Expense Date"}
              value={itemDate}
              onInput={itemDateHandler}
              required
            />
          </div>
        </div>

        <div className="">
          <div className="expense-form-buttons">
            <button
              className="btn btn-primary"
              type="button"
              value="Input"
              onClick={onCancelhandler}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              // onClick={onSubmitHandler}
            >
              {id ? "Confirm" : "Add New Expense"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// ExpenseForm.defaultProps = {
//   name: "sample item",
//   price: 2,
//   date: "1995-10-30",
//   id: 3,
// };

export default ExpenseForm;
