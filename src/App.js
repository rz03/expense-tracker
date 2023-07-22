import "./App.css";
import { Navbar } from "./Components/Navbar.jsx";
import { Header } from "./Components/Header.jsx";
import { Total } from "./Components/Total";
import { ExpenseList } from "./Components/ExpenseList";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Total />
      <ExpenseList />
    </div>
  );
}

export default App;

// Color :
// color 1 : #0f0f0f
// color 2: #5c8d7b
// color 3 :
