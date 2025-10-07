import { Routes, Route } from "react-router-dom";
import { MyNavbar } from "./components/Navbar";
import { MyFooter } from "./components/footer";
import { Home } from "./pages/Home";
import { Compras } from "./pages/Compras";
import { Productos } from "./pages/Productos";
import { Login } from "./pages/Login";


function App() {
  return (
    <>
      <MyNavbar />
      <main className=" bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
