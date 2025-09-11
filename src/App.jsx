import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Properties from "./Page/Properties";
import Favourite from "./Page/Favourite";
import Register from "./Page/Register";
import Login from "./Page/Login";
import AddPropertyForm from "./Page/Address";
import My_properties from "./Page/My_properties";
import Product_view from "./Page/Product_view";
import Contact from "./Page/Contact";
import My_profile from "./Page/My_profile";
import Chiqish from "./Page/Chiqish";


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
        <Route path="/contact" element={<Contact />} />
        <Route path="/my_profile" element={<My_profile />} />
        <Route path="/chiqish" element={<Chiqish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

