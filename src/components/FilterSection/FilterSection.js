import React from "react";
import "./FilterSection.css";
function FilterSection({ onFilterChange, userSelection }) {
  const filterChangeHandler = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter">
      <div className="filter-year">Filtered by Year:</div>
      <div className="filter-control">
        <select
          onInput={filterChangeHandler}
          className="form-select"
          aria-label="Default select example"
          value={userSelection}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSection;
