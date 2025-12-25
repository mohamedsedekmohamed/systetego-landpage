// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './Mainpages/Home';
import Price from './Mainpages/Price';
import Footer from './Mainpages/Footer';
import Loader from './Loader';
import About from './Mainpages/About';
import ContactUs from './Mainpages/ContactUs';
import Services from './Mainpages/Services';
import  Test from './Mainpages/Test'
import ScrollToTop from './ScrollToTop'
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 ثواني

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='w-screen h-screen flex justify-center items-center  '>

    <Loader/>
      </div>
    );
  }

  return (
    <BrowserRouter>
<ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
