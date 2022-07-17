import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two"
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
      </Routes>
    </Router>
  );
}

export default App;