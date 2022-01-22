import React from "react";
import "./AddButton.css";

const AddButton = ({ onFormToggle }) => {
  return (
    <div className="add-button">
      <button className="btn btn-primary " type="button" onClick={onFormToggle}>
        Add New Expense
      </button>
    </div>
  );
};

export default AddButton;
