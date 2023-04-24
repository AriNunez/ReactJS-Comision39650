import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarContainer />}>
          <Route path="/" element={<ItemListContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
