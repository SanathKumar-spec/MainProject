import { Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage";
import Cart from "./pages/cart";
import Chair from "./pages/Chair";
import Sofas from "./pages/Sofas";
import ScrollToTop from "./ScrollToTop";
import Tables from "./pages/Tables";
import Storage from "./pages/Storage";
import MobileSearchPage from "./pages/mobileSearchPage";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/mobileSearchPage" element={<MobileSearchPage/>}/>
        <Route path="/storage" element={<Storage/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/chair" element={<Chair/>}/>
        <Route path="/sofas" element={<Sofas/>}/>
        <Route path="/table" element={<Tables/>}/>
      </Routes>
    </ScrollToTop>
  );
}

export default App;