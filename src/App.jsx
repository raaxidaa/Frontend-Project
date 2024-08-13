import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Startups from './Pages/Startups';
import Jobs from './Pages/Jobs';
import BrowseSturtups from './Pages/BrowseSturtups';
import SeekFunding from './Pages/SeekFunding';
import './App.css';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import JobDetails from './Components/Find-Jobs/JobDetails';
import FindJobs from './Components/Find-Jobs/FindJobs';
import Investor from './Pages/Investor';
import Company from './Pages/Company';
import Blog from './Pages/Blog';

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
        <Route path="/company" element={<Company />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;



