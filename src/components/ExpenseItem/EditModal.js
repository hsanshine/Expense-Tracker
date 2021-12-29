import React from "react";
import ReactModal from "react-modal";
import ExpenseForm from "../ExpenseForm";

const EditModal = ({
  edit_item,
  openModal,
  onCloseEditModal,
  onConfirmEdit,
}) => {
  const [year, month, day] = formatDate(edit_item.date);

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
            date={`${year}-${month}-${day}`}
            id={edit_item.id}
          />
        </div>
      </div>
    </ReactModal>
  );
};

const formatDate = (itemDate) => {
  const day = String(itemDate.getDate()).padStart(2, "0");
  const monthValue = String(itemDate.getMonth() + 1);
  const month = monthValue.padStart(2, "0");
  const year = itemDate.getFullYear();
  return [year, month, day];
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
