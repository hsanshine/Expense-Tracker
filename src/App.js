import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ExpenseForm from "./components/ExpenseForm";
import FilterSection from "./components/FilterSection";
import ExpensesChart from "./components/ExpenseChart/ExpensesChart";
import ExpensesList from "./components/ExpensesList";
import AddButton from "./components/AddButton";
import { v4 } from "uuid";

let seed = [
  {
    id: v4(),
    date: new Date("2019-12-17"),
    name: "books",
    price: "50",
  },
  {
    id: v4(),
    date: new Date("2020-10-17"),
    name: "phone",
    price: "1000",
  },
  {
    id: v4(),
    date: new Date("2021-06-17"),
    name: "partying",
    price: "200",
  },
  {
    id: v4(),
    date: new Date("2022-02-17"),
    name: "rent",
    price: "2000",
  },
  {
    id: v4(),
    date: new Date("2021-01-17"),
    name: "dates",
    price: "300",
  },
];
function App() {
  const defaultYear = new Date().getFullYear().toString();
  //initial seed data to state
  const [entries, setEntries] = useState(seed);

  // for year choosen in filter, we start at 2019
  const [filterYear, setFilterYear] = useState(defaultYear);

  // variable to show the form or not
  const [showForm, setShowForm] = useState(false);

  //helper function to filter entries
  const getFilterEntries = (Year) => {
    console.log(`filtering for ${Year}`);
    let results = entries.filter(
      (entry) => entry.date.getFullYear() === Number(Year)
    );
    console.log(results);
    return results;
  };

  // array for filtered entries
  const [filteredEntries, setFilteredEntries] = useState(() =>
    getFilterEntries(filterYear)
  );

  // when filter is changed
  const onFilterYearChange = (newYear) => {
    console.log(typeof newYear);
    setFilterYear(newYear);
    setFilteredEntries(() => getFilterEntries(Number(newYear)));
    console.log(`filter year changed ${newYear}`);
  };

  //on add new expense
  const onAddNew = (newExpense) => {
    const newEntry = {
      id: v4(),
      date: new Date(newExpense.date),
      name: newExpense.name,
      price: newExpense.price,
    };
    setEntries([...entries, newEntry]);
    setFilterYear(newEntry.date.getFullYear());
    setFilteredEntries(() =>
      getFilterEntries(Number(newEntry.date.getFullYear()))
    );
    console.log(newEntry);
  };

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
            onFormSubmit={onAddNew}
            onFormClose={formToggleHandler}
          />
        )}
        <FilterSection
          onFilterChange={onFilterYearChange}
          intialSelection={filterYear}
        />

        <ExpensesList expenses={filteredEntries} />
        <ExpensesChart displayYear={filterYear} />
      </div>
    </div>
  );
}

export default App;
