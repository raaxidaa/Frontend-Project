import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Startups from './Pages/Startups';
import Jobs from './Pages/Jobs';
import BrowseSturtups from './Pages/BrowseSturtups';
import SeekFunding from './Pages/SeekFunding';
import Investor from './Pages/Investor';
import './App.css';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browsestartups" element={<BrowseSturtups />} />
        <Route path='/seekfunding' element={<SeekFunding />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;



