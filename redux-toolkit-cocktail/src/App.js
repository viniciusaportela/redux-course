import Home from "./pages/Home/Home";
import SingleCocktail from "./pages/SingleCocktail/SingleCocktail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cocktail/:id" element={<SingleCocktail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
