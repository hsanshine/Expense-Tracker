import React from "react";

function ExpenseForm(props) {
  return (
    <div className="row border border-primary rounded-3 border-2 m-3">
      <form className="col g-3 p-4">
        <h2 className="mb-3 fs-2">Expenses form</h2>
        <div className="row g-3 mb-3">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Item name"
              id="expense-name"
              required
            />
          </div>
          <div className="col-sm-6">
            <div className="input-group col-md-6 mb-3">
              <span className="input-group-text">Price $</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
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
              required
            />
          </div>
          <div className="col-sm-6 mb-3 row">
            <button
              className="btn btn-primary col m-1"
              type="button"
              value="Input"
            >
              Cancel
            </button>
            <button className="btn btn-primary col m-1" type="submit">
              Add New Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
