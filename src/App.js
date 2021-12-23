import "./App.css";
import NavBar from "./components/NavBar";
import ExpenseForm from "./components/ExpenseForm";
import FilterSection from "./components/FilterSection";
import ExpensesChart from "./components/ExpenseChart/ExpensesChart";
import ExpensesList from "./components/ExpensesList";

let seed = [
  {
    date: new Date("2020-12-17"),
    name: "books",
    price: "50",
  },
  {
    date: new Date("2020-10-17"),
    name: "phone",
    price: "1000",
  },
  {
    date: new Date("2020-06-17"),
    name: "partying",
    price: "200",
  },
  {
    date: new Date("2020-02-17"),
    name: "rent",
    price: "2000",
  },
  {
    date: new Date("2020-01-17"),
    name: "dates",
    price: "300",
  },
];
function App() {
  return (
    <div>
      <div className="main container mt-3 bg-light">
        <NavBar />
        <ExpenseForm />
        <FilterSection />
        <ExpensesChart />
        <ExpensesList expenses={seed} />
      </div>
      yt
    </div>
  );
}

export default App;
