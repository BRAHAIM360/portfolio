import React from 'react';
import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './components/home';
import { SideBar } from './components/sideBar';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
      </Route>
    </BrowserRouter>



  );
}

export default App;
