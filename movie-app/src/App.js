import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movie/:id" element={<MoviePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
