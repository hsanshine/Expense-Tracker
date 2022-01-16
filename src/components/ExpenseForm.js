import { useState } from "react";
import React from "react";

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
    <div className="row border border-primary rounded-3 border-2 m-3 expense-form">
      <form className="col g-3 p-4" onSubmit={onSubmitHandler}>
        <h2 className="mb-3 fs-2">
          {" "}
          {id ? "Edit Expense Form" : "New Expense Form"}
        </h2>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <div className="input-group col-md-6 mb-3">
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
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="date"
              className="form-control"
              id="expense-date"
              placeholder={itemDate}
              value={itemDate}
              onInput={itemDateHandler}
              required
            />
          </div>
          <div className="col-md-6 mb-3 row">
            <button
              className="btn btn-primary col m-1"
              type="button"
              value="Input"
              onClick={onCancelhandler}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary col m-1"
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
