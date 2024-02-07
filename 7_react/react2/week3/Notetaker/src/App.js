import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Notes from "./pages/Notes";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notes" element={<Notes/>}/>
          <Route path="*" element={<h1>404 Page not found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
