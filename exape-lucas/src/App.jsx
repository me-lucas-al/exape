import "./App.css";
import logo from "./assets/logo.png";
import Menu from "./components/menu/menu";
function App() {
  return (
    <>
        <div className="app">
          <div className="imgContainer">
            <img src={logo} alt="logo" />
          </div>
          <Menu />
        </div>
    </>
  );
}

export default App;
