import React from "react";
import { useEffect } from "react";
const AlertMsg = ({ alertType, onHide }) => {
  useEffect(() => {
    const timerID = setInterval(onHide, 3000);
    return clearInterval(timerID);
  });
  return (
    <>
      <div
        class="alert alert-success alert-dismissible fade show p-3 m-3"
        role="alert"
      >
        <strong>
          {" "}
          {alertType === "edit" ? "Edit" : "Deletion"} completed!
        </strong>
        <button type="button" class="btn-close" onClick={onHide}></button>
      </div>
    </>
  );
};

export default AlertMsg;
