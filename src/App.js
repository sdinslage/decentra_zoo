import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Crypto from './Crypto';
import Gameplay from './Gameplay';
import Progress from './Progress';
import Home from './Home';
import './App.css';
import logo from './imgs/logo.jpg';

function App() {
  return (
    <div className='app-container'>
    <Router>
      <header className="header">
        <section className="flex">
        <img src={logo} alt="DecentraZoo Logo" className="logo" />
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/crypto">Crypto</Link>
            <Link to="/gameplay">Gameplay</Link>
            <Link to="/progress">Progress</Link>
          </nav>
        </section>
      </header>

      <main>
    
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </main>

      <footer className='footer'>
        <p>Contact Information: [contact@decentrazoo.com]</p>
      </footer>
    </Router>
    </div>
  );
}

export default App;
