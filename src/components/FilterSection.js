import React from "react";

function FilterSection({ onFilterChange }) {
  const filterChangeHandler = (e) => {
    onFilterChange(e.target.value);
    //console.log(`value has changed to ${e.target.value}`);
  };
  return (
    <div className="row p-3 m-3 rounded-3 bg-primary text-white">
      <div className="col-sm-4 mb-1 fw-bold fs-5">Filtered by Year:</div>
      <div className="col-sm-6 col-md-3 ms-auto">
        <select
          onChange={filterChangeHandler}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue={"2019"}>2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSection;
