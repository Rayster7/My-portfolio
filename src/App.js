import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GdServices from './Pages/GdServices';
import WdServices from './Pages/WdServices';
import ContactPage from './Pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage'; 
import NotFoundPage from './Pages/NotFoundPage'; 

function App() {
  return (
    <BrowserRouter>
    <div className=''style={{backgroundImage: 'url(https://wallpaperaccess.com/full/3861179.jpg)'}}>
    <Header />
      <main className="container mx-auto p-5 rounded-2xl mt-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(9,9,121,0.8491771708683473) 42%, rgba(2,0,36,0.9528186274509804) 84%)', }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gd-services" element={<GdServices />} />
          <Route path="/wd-services" element={<WdServices />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;