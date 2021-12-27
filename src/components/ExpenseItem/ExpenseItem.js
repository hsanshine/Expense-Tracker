import React from "react";
import PropTypes from "prop-types";
import Calender from "./Calender";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function ExpenseItem({ id, day, month, year, name, price, onEdit, onTrash }) {
  const editHandler = () => {
    console.log("edit icon was clicked!");
  };

  const trashHandler = () => {
    onTrash(id);
  };
  return (
    <div
      className="
          expense-item
              row row-col-3
              border border-dark
              bg-secondary
              mx-2
              mb-3
              rounded-3
            "
    >
      {/* <!--      calender    --> */}
      <Calender day={day} month={month} year={year} />
      {/* <!--      items name    --> */}
      <div className="fw-bold col m-auto text-capitalize"> {name}</div>
      {/* <!--    item price      --> */}

      <div className=" col my-auto position-relative">
        <div className="ms-auto my-auto ">
          <div
            className="
                  fw-bold
                  py-2
                  d-flex
                  justify-content-center
                  px-auto
                  border border-2 border-light
                  rounded-pill
                  expense-price
                  ms-auto
                  me-1
                "
          >
            {"$ " + price}
          </div>
          <div
            className="position-absolute d-flex  icons-box"
            style={{ top: "3.5rem", right: "1.5rem" }}
          >
            <div className="w-50">
              <FaEdit
                className="expense-item-icon edit-icon"
                onClick={editHandler}
              />
            </div>
            <div className=" w-50">
              <FaTrashAlt
                className="expense-item-icon trash-icon"
                onClick={trashHandler}
              />
            </div>
          </div>
        </div>
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
