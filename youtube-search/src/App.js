import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import { Provider } from "react-redux";
import "./app.css";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    </Provider>
  );
}

export default App;
