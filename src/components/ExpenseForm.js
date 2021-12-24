import { useState } from "react";
import React from "react";

function ExpenseForm(props) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDate, setItemDate] = useState("");

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
    // console.log("form submit was canceled");
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      name: itemName,
      price: itemPrice,
      date: itemDate,
    };
    //console.log(newExpense);
    props.onFormSubmit(newExpense);
    setItemName("");
    setItemPrice("");
    setItemDate("");
    // console.log("form was submited");
  };
  return (
    <div className="row border border-primary rounded-3 border-2 m-3">
      <form className="col g-3 p-4" onSubmit={onSubmitHandler}>
        <h2 className="mb-3 fs-2">Expenses form</h2>
        <div className="row g-3 mb-3">
          <div className="col-sm-6">
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
          <div className="col-sm-6">
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
          <div className="col-sm-6 mb-3">
            <input
              type="date"
              className="form-control"
              id="expense-date"
              value={itemDate}
              onInput={itemDateHandler}
              required
            />
          </div>
          <div className="col-sm-6 mb-3 row">
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
              Add New Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
