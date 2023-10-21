import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './components/HomePage.jsx'
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <HomePage />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
