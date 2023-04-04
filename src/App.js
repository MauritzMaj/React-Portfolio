import React, {Component} from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import "./index.css";
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
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
            </Routes>

          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;