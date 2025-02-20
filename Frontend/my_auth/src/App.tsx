import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./sigin";
import About from "./logout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/fetch" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
