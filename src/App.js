import Main from "./Components/Main";
import Result from "./Components/Result";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search/:q" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
