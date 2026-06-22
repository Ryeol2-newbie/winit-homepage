// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Process from './components/Process';
import Order from './components/Order';
import Footer from './components/Footer';

export default function App() {
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