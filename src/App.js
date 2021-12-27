import { useState } from "react";
import NavBar from "./components/NavBar";
import ExpenseForm from "./components/ExpenseForm";
import FilterSection from "./components/FilterSection";
import ExpensesChart from "./components/ExpenseChart/ExpensesChart";
import ExpensesList from "./components/ExpensesList";
import AddButton from "./components/AddButton";
import { seed } from "./seed";

import { v4 } from "uuid";

function App() {
  //show the current year data on start
  let initialYear = new Date().getFullYear().toString();

  //initial seed data to state
  const [entries, setEntries] = useState(seed);

  // variable to show the form or not
  const [showForm, setShowForm] = useState(false);

  // for year choosen in filter, we start at 2019
  const [filterYear, setFilterYear] = useState(initialYear);

  // when filter is changed
  const filterChangeHandler = (newYear) => {
    // setFilteredEntries(() => filterEntries(entries, Number(newYear)));
    setFilterYear(newYear);
  };

  //on add new expense
  const addNewHandler = (newExpense) => {
    const newEntry = {
      id: v4(),
      date: new Date(newExpense.date),
      name: newExpense.name,
      price: newExpense.price,
    };

    setEntries(() => [...entries, newEntry]);
    setFilterYear(newEntry.date.getFullYear());
  };

  // form toggle handler
  const formToggleHandler = () => {
    setShowForm(!showForm);
  };

  // edit handler, should provide edit form
  const editHandler = () => {
    console.log("item was editing, app.js");
  };

  // trashing handler function
  const trashHandler = (id) => {
    console.log(`item ${id}`);
    //search for it in entries and delete
    setEntries((entries) => entries.filter((entry) => entry.id !== id));
    console.log("item was deleted!");
  };

  return (
    <div>
      <div className="main container mt-3 pb-3 bg-light">
        <NavBar />
        {!showForm && <AddButton onFormToggle={formToggleHandler} />}
        {showForm && (
          <ExpenseForm
            onFormSubmit={addNewHandler}
            onFormClose={formToggleHandler}
          />
        )}
        <FilterSection
          onFilterChange={filterChangeHandler}
          userSelection={filterYear}
        />

        <ExpensesList
          expenses={entries}
          displayYear={filterYear}
          onEdit={editHandler}
          onTrash={trashHandler}
        />
        {/* <ExpensesChart displayYear={filterYear} /> */}
      </div>
    </div>
  );
}

export default App;
