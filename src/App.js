import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="Home">
          <Home />
        </div>
        <div className="Login">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
