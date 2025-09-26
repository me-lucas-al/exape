import "./App.css";
import logo from "./assets/logo.png";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import Main from "./components/receitas/main";
function App() {
  return (
    <>
        <div className="app">
          <div className="imgContainer">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <Menu />
          <Main />
          <Footer />
        </div>
    </>
  );
}

export default App;
