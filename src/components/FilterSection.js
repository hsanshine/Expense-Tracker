import React from "react";

function FilterSection() {
  return (
    <div class="row p-3 m-3 rounded-3 bg-primary text-white">
      <div class="col-sm-4 mb-1 fw-bold fs-5">Filtered by Year:</div>
      <div class="col-sm-6 col-md-3 ms-auto">
        <select class="form-select" aria-label="Default select example">
          <option selected value="1">
            2019
          </option>
          <option value="2">2020</option>
          <option value="3">2021</option>
          <option value="2">2022</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSection;
