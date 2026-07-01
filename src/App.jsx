// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Process from './components/Process';
import Order from './components/Order';
import Footer from './components/Footer';
import Admin from './components/Admin';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Process />
      <Order />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/winit-homepage">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}