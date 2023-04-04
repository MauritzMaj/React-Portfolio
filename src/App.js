import React, {Component} from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import "./index.css";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer';
import Resume from './Components/Resume';


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>
            
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact/>} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/resume" element={<Resume />} />
            </Routes>

          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;