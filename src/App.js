import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About Page/About';
import Contact from './pages/Contact Page/Contact';
import Crew from './pages/Crew Page/Crew';
import Home from './pages/Home Page/Home';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
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
