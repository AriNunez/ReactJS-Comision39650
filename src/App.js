import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  let mensajeSaludo = "Bienvenido! Esta es mi primera Pre-Entrega.";
  return (
    <div className="App">
      <NavbarContainer />
      <ItemListContainer mensajeSaludo={mensajeSaludo} />
    </div>
  );
}

export default App;
