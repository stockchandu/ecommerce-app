import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { ProductCart } from "./components/Cart/ProductCart";
import { ProductDetails } from "./components/Product/ProductDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/cart" element={<ProductCart />} />
        <Route exact path="/product_details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
