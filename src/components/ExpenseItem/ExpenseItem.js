import React from "react";
import PropTypes from "prop-types";
import Calender from "./Calender";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./ExpenseItem.css";

function ExpenseItem({ id, day, month, year, name, price, onEdit, onTrash }) {
  const editHandler = () => {
    onEdit(id);
  };

  const trashHandler = () => {
    onTrash(id);
  };
  return (
    <div className="expense-item">
      {/* <!--      calender    --> */}{" "}
      <div className="">
        <Calender day={day} month={month} year={year} />
      </div>
      {/* item information */}
      <div className="item-info">
        <div className="item-name"> {name}</div>
        <div className="item-price"> {"$ " + price}</div>
        <span className="item-icons">
          <FaEdit className="item-icon edit-icon" onClick={editHandler} />
          <FaTrashAlt className="item-icon trash-icon" onClick={trashHandler} />
        </span>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ExpenseItem;
