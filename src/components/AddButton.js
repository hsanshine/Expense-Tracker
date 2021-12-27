import React from "react";

const AddButton = ({ onFormToggle }) => {
  return (
    <div className="d-grid gap-2 m-3">
      <button className="btn btn-primary" type="button" onClick={onFormToggle}>
        Add New Expense
      </button>
    </div>
  );
};

export default AddButton;
