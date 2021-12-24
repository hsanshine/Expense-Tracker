import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ExpenseForm from "./components/ExpenseForm";
import FilterSection from "./components/FilterSection";
import ExpensesChart from "./components/ExpenseChart/ExpensesChart";
import ExpensesList from "./components/ExpensesList";
import { v4 } from "uuid";

let seed = [
  {
    id: v4(),
    date: new Date("2020-12-17"),
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
    date: new Date("2020-06-17"),
    name: "partying",
    price: "200",
  },
  {
    id: v4(),
    date: new Date("2020-02-17"),
    name: "rent",
    price: "2000",
  },
  {
    id: v4(),
    date: new Date("2020-01-17"),
    name: "dates",
    price: "300",
  },
];
function App() {
  //initial seed data to state

  // for year choosen in filter, we start at 2019
  const [filterYear, setFilterYear] = useState(2019);

  // for filtering the state for selected year
  // when filter is changed
  const onFilterYearChange = (newYear) => {
    setFilterYear(newYear);
    console.log(`filter year changed ${newYear}`);
  };
  return (
    <div>
      <div className="main container mt-3 bg-light">
        <NavBar />
        <ExpenseForm />
        <FilterSection onFilterChange={onFilterYearChange} />
        <ExpensesChart displayYear={filterYear} />
        <ExpensesList expenses={seed} />
      </div>
    </div>
  );
}

export default App;
