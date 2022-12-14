import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />}></Route>
        <Route path="/watched" element={<Watched />}></Route>
        <Route path="/add" element={<Add/>}></Route>
      </Routes>
    </Router>
    </GlobalProvider>

  );
}

export default App;
