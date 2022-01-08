import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import Login from "./components/pages/Login";
import Products from "./components/pages/Products";
import NewProduct from "./components/products/NewProduct";



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Routes>  
        <Route path="/products/new" element={<NewProduct/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<SignIn/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
