import React from "react";

const AddButton = ({ onFormToggle }) => {
  return (
    <div class="d-grid gap-2 m-3">
      <button class="btn btn-primary" type="button" onClick={onFormToggle}>
        Add New Expense
      </button>
    </div>
  );
};

export default AddButton;
