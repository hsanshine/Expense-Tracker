import { useState } from "react";
import NavBar from "./components/NavBar";
import ExpenseForm from "./components/ExpenseForm";
import FilterSection from "./components/FilterSection";
import ExpensesChart from "./components/ExpenseChart/ExpensesChart";
import ExpensesList from "./components/ExpensesList";
import AddButton from "./components/AddButton";
import TrashModal from "./components/ExpenseItem/TrashModal";
import EditModal from "./components/ExpenseItem/EditModal";
import AlertMsg from "./AlertMsg";

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
  const [showTrashModal, setShowTrashModal] = useState(false);

  //id of item to be deleted
  const [deleteId, setTrashId] = useState("");

  //name of item to be deleted
  const [trashName, setTrashName] = useState("");

  // to show or not to show edit modal
  const [showEditModal, setShowEditModal] = useState(false);

  // to show alerts
  //const [showAlert, setShowAlert] = useState(true);
  const [alertType, setAlertType] = useState("");

  // // id of item to be edited
  // const [editId, setEditId] = useState("");

  const [editItem, setEditItem] = useState("");
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

  // trashing click handler function
  const onTrashClickHandler = (id) => {
    setShowTrashModal(!showTrashModal);
    setTrashId(id);
    setTrashName(findItemName(id));
  };

  // trashing confirm handler function
  const onTrashConfirmHandler = () => {
    setShowTrashModal(!showTrashModal);
    setEntries((entries) => entries.filter((entry) => entry.id !== deleteId));
    setTrashId("");
    setTrashName("");
    //setShowAlert();
    setAlertType("trash");
  };

  //on close modal
  const onCloseTrashModalHandler = () => {
    setShowTrashModal(!showTrashModal);
  };

  //on edit handler
  const onEditClickHandler = (id) => {
    setEditItem(() => entries.find((entry) => entry.id === id));
    setShowEditModal(!showEditModal);
  };

  // on closing edit modal
  const onCloseEditModalHandler = () => {
    setShowEditModal(!showEditModal);
  };

  // on finishing editing
  const onConfirmEditHandler = (editedExpense) => {
    const newEntry = {
      id: v4(),
      date: new Date(editedExpense.date),
      name: editedExpense.name,
      price: editedExpense.price,
    };
    //add new item to the entries
    setEntries(() => [...entries, newEntry]);
    //remove old edited item
    setEntries((entries) =>
      entries.filter((entry) => entry.id !== editItem.id)
    );
    setFilterYear(new Date(editedExpense.date).getFullYear());
    setShowEditModal(!showEditModal);
    setAlertType("edit");
  };

  //on hide alert
  const handleHideAlert = () => {
    setAlertType("");
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

        {alertType.length > 0 && (
          <AlertMsg alertType={alertType} onHide={handleHideAlert} />
        )}

        <ExpensesList
          expenses={entries}
          displayYear={filterYear}
          onEdit={onEditClickHandler}
          onTrash={onTrashClickHandler}
        />
        <TrashModal
          item_name={trashName}
          openModel={showTrashModal}
          onCloseModal={onCloseTrashModalHandler}
          onConfirmDelete={onTrashConfirmHandler}
        />
        {showEditModal && (
          <EditModal
            edit_item={editItem}
            openModal={showEditModal}
            onCloseEditModal={onCloseEditModalHandler}
            onConfirmEdit={onConfirmEditHandler}
          />
        )}

        <ExpensesChart displayYear={filterYear} />
      </div>
    </div>
  );
}

export default App;
