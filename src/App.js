import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";


import Home from "./pages/Index";
import Products from './pages/Product/Products/index'
import NewArrivals from './pages/Product/NewArrival'
import Offers from './pages/Product/Offer'
import TopSelling from './pages/Product/TopProduct'
import HomeLayout from './pages/Product/HomeLayout'
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"                 element={<Home />} >
          <Route path="/"               element={<HomeLayout />} />
          <Route path="/home"           element={<HomeLayout />} />
          <Route path="/products"       element={<Products />} />
          <Route path="/new-arrivals"   element={<NewArrivals />} />
          <Route path="/offers"         element={<Offers />} />
          <Route path="/top-selling"    element={<TopSelling />} />

          {/* About us footer*/}
          
          <Route path="/contact-us"        element={<Contact/>} />
          <Route path="/About-us"       element={<About />} />
          <Route path="/Terms-Conditions"       element={<TermsAndConditions />} />

          {/*  */}

          <Route path="/*"              element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;