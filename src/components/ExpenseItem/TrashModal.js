import React from "react";
import ReactModal from "react-modal";

function TrashModal({ item_name, openModel, onCloseModal, onConfirmDelete }) {
  return (
    <ReactModal isOpen={openModel} className="modal-dialog" ariaHideApp={false}>
      <div className="">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Are you sure you want to delete "
              <span className="text-capitalize">{item_name}</span>"
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>You will not be able to recover it.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

TrashModal.defaultProps = {
  item_name: "some item",
  openModel: true,
};
export default TrashModal;
