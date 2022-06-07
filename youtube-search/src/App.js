import "./app.css";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </div>
  );
}

export default App;
