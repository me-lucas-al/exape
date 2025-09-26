import "./App.css";
import logo from "./assets/logo.png";
import Menu from "./components/menu/menu";
import Main from "./components/principal/main";
import Recipes from "./components/receitas/recipes";
function App() {
  return (
    <>
        <div className="app">
          <div className="imgContainer">
            <img src={logo} alt="logo" />
          </div>
          <Menu />
          <Main />
          <Recipes />
        </div>
    </>
  );
}

export default App;
