import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About'
import DashBoard from './pages/DashBoard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Heading from './components/Heading'
import Profile from './pages/Profile'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
