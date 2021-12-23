import "./App.css";
import NavBar from "./components/NavBar";
import ExpenseForm from "./components/ExpenseForm";
import FilterSection from "./components/FilterSection";
import ExpensesChart from "./components/ExpenseChart/ExpensesChart";
import ExpensesList from "./components/ExpensesList";
function App() {
  return (
    <div>
      <div className="main container mt-3 bg-light">
        <NavBar />
        <ExpenseForm />
        <FilterSection />
        <ExpensesChart />
        <ExpensesList />
      </div>
    </div>
  );
}

export default App;
