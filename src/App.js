import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About'
import DashBoard from './pages/DashBoard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Heading from './components/Heading'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import LoginWithNavigate from './pages/Login'
import RegisterWithNavigate from './pages/Register'
import ShoppingCart from './pages/ShoppingCart'
import CatsTreats from './pages/CatsTreats'
import CatsToys from './pages/CatsToys'
import CatsCare from './pages/CatsCare'
import AllProducts from './pages/AllProducts'

function App() {
  return (
    <BrowserRouter basename='/'>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<LoginWithNavigate />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Register" element={<RegisterWithNavigate />} />
        <Route path="/CatsTreats" element={<CatsTreats />} />
        <Route path="/CatsToys" element={<CatsToys />} />
        <Route path="/CatsCare" element={<CatsCare />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
