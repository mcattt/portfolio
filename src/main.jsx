import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './components/HomePage.jsx'
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import Header from './components/Header';
import Background from './components/Background';
import { TabProvider } from './components/TabContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <TabProvider>
      <Header />
      <SideNav />
      <Background />
      <HomePage />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </TabProvider>
  </React.StrictMode>,
)
