import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Register from './components/Register';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot'; // Ensure this path is correct
import Loading from './components/Loading';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/register" element={<Register />} />
          <Route path="/results" element={<Results />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
        <Footer />
        <Chatbot /> {/* Ensure this component is correctly placed */}
      </div>
    </Router>
  );
}

export default App;
