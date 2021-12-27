import { useState } from "react";
import React from "react";

function FilterSection({ onFilterChange, currentSelection }) {
  console.log(`provided intial value ${currentSelection}`);
  //const [selectedValue, setSelectedValue] = useState(0); // useState(intialSelection);

  const filterChangeHandler = (e) => {
    //setSelectedValue(e.target.value);
    onFilterChange(e.target.value); //when it changes we just push the choosen value to the top
    //console.log(`value has changed to ${e.target.value}`);
  };
  //console.log(`current selected value ${selValue}`);

  return (
    <div className="row p-3 m-3 rounded-3 bg-primary text-white">
      <div className="col-sm-4 mb-1 fw-bold fs-5">Filtered by Year:</div>
      <div className="col-sm-4  ms-auto">
        <select
          onChange={filterChangeHandler}
          className="form-select"
          aria-label="Default select example"
          value={currentSelection}
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

FilterSection.defaultProps = {
  initialSelection: "2022",
};
export default FilterSection;
