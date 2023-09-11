import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import AboutFestival from './components/AboutFestival';
import Accordion from './components/Accordion';
import AdBoxes from './components/AdBoxes';
import Animation from './components/Animation';
import FeaturedMusicians from './components/FeaturedMusicians';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import Merch from './components/Merch';
import Navbar from './components/Navbar'
import Schedule from './components/Schedule';
import Tickets from './components/Tickets';


function App() {
  return (
    <Router>
      <div className='bg-black background-image'>
      <Navbar />
      <AdBoxes />
      <InfoSection />
      <AboutFestival />
      <Animation />
      <Schedule />
      <Tickets />
      <FeaturedMusicians />
      <Accordion />
      <Merch />
      <Animation />
      <Footer />
      </div>
    </Router>
  );
}

export default App
