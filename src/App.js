import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(340deg, #addbf8 0, #509fcc 50%, #0067a2 100%)",
        height: "1000px",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={<h1>La ruta a la que intenta acceder no existe</h1>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
