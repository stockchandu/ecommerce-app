import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { ProductCart } from "./components/Cart/ProductCart";
import { ProductDetails } from "./components/Product/ProductDetails";
import { PaymentPage } from "./components/Payment/PaymentPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/cart" element={<ProductCart />} />
        <Route exact path="/product_details/:id" element={<ProductDetails />} />
        <Route exact path="/payment-page" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
