import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HOME_URL } from './routes';
import Home from './pages/Home';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
