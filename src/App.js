import { useState } from "react";
import NavBar from "./components/NavBar";
import ExpenseForm from "./components/ExpenseForm";
import FilterSection from "./components/FilterSection";
import ExpensesChart from "./components/ExpenseChart/ExpensesChart";
import ExpensesList from "./components/ExpensesList";
import AddButton from "./components/AddButton";
import TrashModal from "./components/ExpenseItem/TrashModal";

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

  //boolean for showing modal or not
  const [showModal, setShowModal] = useState(false);

  //id of item to be deleted
  const [deleteId, setDeleteId] = useState("");

  //name of item to be deleted
  const [trashName, setTrashName] = useState("");

  // when filter is changed
  const filterChangeHandler = (newYear) => {
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

  // trashing click handler function
  const trashClickHandler = (id) => {
    setShowModal(!showModal);
    setDeleteId(id);
    setTrashName(findItemName(id));
  };

  // trashing confirm handler function
  const trashConfirmHandler = () => {
    setShowModal(!showModal);
    setEntries((entries) => entries.filter((entry) => entry.id !== deleteId));
  };

  //on close modal
  const onCloseModalHandler = () => {
    setShowModal(!showModal);
  };

  // name of item to be deleted
  const findItemName = (id) => entries.find((entry) => entry.id === id).name;

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
          onTrash={trashClickHandler}
        />
        <TrashModal
          item_name={trashName}
          openModel={showModal}
          onCloseModal={onCloseModalHandler}
          onConfirmDelete={trashConfirmHandler}
        />

        {/* <ExpensesChart displayYear={filterYear} /> */}
      </div>
    </div>
  );
}

export default App;
