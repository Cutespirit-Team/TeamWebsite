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
import Info from './pages/About/Info';
import Intro from './pages/About/Intro';
import Link from './pages/About/Link';
import Member from './pages/About/Member';
import Cooperation from './pages/About/Cooperation';
import History from './pages/About/History';

import Joinus from "./pages/Joinus";
import ChangeLog from "./pages/ChangeLog";
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
        <Route path="about" element={<About />} >
          <Route path="info" element={<Info />} />
          <Route path="intro" element={<Intro />} />
          <Route path="link" element={<Link />} />
          <Route path="member" element={<Member />} />
          <Route path="cooperation" element={<Cooperation />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/joinus" element={<Joinus />} />
        <Route path="/changes" element={<ChangeLog />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
