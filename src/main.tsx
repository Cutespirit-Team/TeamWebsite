import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import App from "./App";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Project from "./pages/Project";
import About from "./pages/About";
import Joinus from "./pages/Joinus";
import ChangeLog from "./pages/ChangeLog";
import Dev from "./pages/Dev";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/joinus" element={<Joinus />} />
        <Route path="/changes" element={<ChangeLog />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
