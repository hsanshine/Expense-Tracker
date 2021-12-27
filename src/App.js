import { useState } from "react";
import NavBar from "./components/NavBar";
import ExpenseForm from "./components/ExpenseForm";
import FilterSection from "./components/FilterSection";
import ExpensesChart from "./components/ExpenseChart/ExpensesChart";
import ExpensesList from "./components/ExpensesList";
import AddButton from "./components/AddButton";
import { seed } from "./seed";
import { filterEntries } from "./helpers";
import { v4 } from "uuid";

function App() {
  //show the current year data on start
  const defaultYear = new Date().getFullYear().toString();

  //initial seed data to state
  const [entries, setEntries] = useState(seed);

  // variable to show the form or not
  const [showForm, setShowForm] = useState(false);

  // for year choosen in filter, we start at 2019
  const [filterYear, setFilterYear] = useState(defaultYear);

  // array for filtered entries
  const [filteredEntries, setFilteredEntries] = useState(
    filterEntries(entries, defaultYear)
  );

  // when filter is changed
  const onFilterYearChange = (newYear) => {
    console.log(newYear);
    setFilteredEntries(() => filterEntries(entries, Number(newYear)));
    console.log(`filter year changed ${newYear}`);
  };

  // //on add new expense
  // const onAddNew = (newExpense) => {
  //   const newEntry = {
  //     id: v4(),
  //     date: new Date(newExpense.date),
  //     name: newExpense.name,
  //     price: newExpense.price,
  //   };
  //   setEntries([...entries, newEntry]);
  //   setFilterYear(newEntry.date.getFullYear());
  //   setFilteredEntries(() =>
  //     getFilterEntries(Number(newEntry.date.getFullYear()))
  //   );
  //   console.log(newEntry);
  // };

  // form toggle handler
  const formToggleHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div className="main container mt-3 bg-light">
        <NavBar />
        {!showForm && <AddButton onFormToggle={formToggleHandler} />}
        {showForm && (
          <ExpenseForm
            // onFormSubmit={onAddNew}
            onFormClose={formToggleHandler}
          />
        )}
        <FilterSection
          onFilterChange={onFilterYearChange}
          currenSelection={defaultYear}
        />

        <ExpensesList expenses={filteredEntries} />
        {/* <ExpensesChart displayYear={filterYear} /> */}
      </div>
    </div>
  );
}

export default App;
