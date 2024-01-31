// Import necessary modules and components
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About Page/About';
import Contact from './pages/Contact Page/Contact';
import Crew from './pages/Crew Page/Crew';
import Home from './pages/Home Page/Home';
import Homealt from './pages/Home Alternative/Home_alter';

import AnimatedCursor from 'react-animated-cursor';

// Define your App component
function App() {
  return (
    <Router>
      <main>
      <AnimatedCursor  innerSize='20px'color='255,255,255' showSystemCursor='true'/>
      {/* <CircleFollowCursor/> */}
        <Routes>
          <Route path='/' element={<Homealt />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;