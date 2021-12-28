import React from "react";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import ExpenseForm from "../ExpenseForm";

const EditModal = ({
  edit_item,
  openModal,
  onCloseEditModal,
  onConfirmEdit,
}) => {
  // i dont think these variables should be state as they are just initial variables to the form update that you want to do.
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (openModal) {
      let monthValue = String(edit_item.date.getMonth() + 1);
      setDay(String(edit_item.date.getDate()).padStart(2, "0"));
      setMonth(monthValue.padStart(2, "0"));
      setYear(edit_item.date.getFullYear());
      // console.log(`${year}-${month}-${day}`);
    }
  }, [openModal, day, edit_item.date, month, year]);

  return (
    <ReactModal isOpen={openModal} ariaHideApp={false} className="edit-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Edit {edit_item.name} item
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onCloseEditModal}
          ></button>
        </div>
        <div className="modal-body">
          <ExpenseForm
            onFormClose={onCloseEditModal}
            onFormSubmit={onConfirmEdit}
            name={edit_item.name}
            price={edit_item.price}
            date={`${year}-${"01"}-${day}`}
            id={edit_item.id}
          />
        </div>
      </div>
    </ReactModal>
  );
};

// EditModal.defaultProps = {
//   edit_item: {
//     name: "sample name",
//     price: "2000",
//     date: "1998-10-30",
//     id: "25",
//   },
// };
// EditModal.defaultProps = {
//   edit_item: {
//     name: "sample name",
//     price: "2000",
//     date: "1998-10-30",
//     id: "25",
//   },
// };
export default EditModal;
