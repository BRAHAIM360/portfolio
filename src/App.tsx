import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
