import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import from 'react-router-dom' instead of 'react'
import { Home } from './pages/Home';
import Login from './pages/Login';
import { AuthProvider } from './contexts/authContext';

const App = () => {
  return (
    <>
      {/* <Home/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/d" element={<Home />} />
          <Route path="/" element={<AuthProvider><Login/></AuthProvider>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
