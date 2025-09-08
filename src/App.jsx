import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Properties from "./Page/Properties";
import Favourite from "./Page/Favourite";
import Register from "./Page/Register";
import Login from "./Page/Login";
import AddPropertyForm from "./Page/Address";
import My_properties from "./Page/My_properties";
import Product_view from "./Page/product_view";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/favorite" element={<Favourite />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addpropertyform" element={<AddPropertyForm />} />
        <Route path="/my_properties" element={<My_properties />} />
        <Route path="/product_view" element={<Product_view />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
