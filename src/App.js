import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/aboba"}>aboba</Link>
        <Link to={"/test"}>test</Link>
        <Link to={"/zopa"}>zopa</Link>
      </header>

      <Routes path="/">
        <Route path="/aboba" element={<p>aboba</p>} />
        <Route path="/test" element={<p>test</p>} />
        <Route path="/zopa" element={<p>zopa</p>} />
      </Routes>
    </div>
  );
}

export default App;
