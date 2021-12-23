import React from "react";

function ExpenseForm(props) {
  return (
    <div class="row border border-primary rounded-3 border-2 m-3">
      <form class="col g-3 p-4">
        <h2 class="mb-3 fs-2">Expenses form</h2>
        <div class="row g-3 mb-3">
          <div class="col-sm-6">
            <input
              type="text"
              class="form-control"
              placeholder="Item name"
              id="expense-name"
              required
            />
          </div>
          <div class="col-sm-6">
            <div class="input-group col-md-6 mb-3">
              <span class="input-group-text">Price $</span>
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
                required
              />
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 mb-3">
            <input
              type="date"
              class="form-control"
              id="expense-date"
              required
            />
          </div>
          <div class="col-sm-6 mb-3 row">
            <button class="btn btn-primary col m-1" type="button" value="Input">
              Cancel
            </button>
            <button class="btn btn-primary col m-1" type="submit">
              Add New Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
