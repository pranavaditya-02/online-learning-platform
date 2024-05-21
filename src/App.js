import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Homepage from './Components/Homepage/Homepage';
import LoginPage from './Components/Login/login';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Define route for Homepage */}
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
