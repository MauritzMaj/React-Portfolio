import React from 'react';
import { Link } from "react-router-dom"

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
         <div style={linkStyle}>
          <Link to="/">Home </Link>
        </div>
        <div style={linkStyle}>
          <Link to="/about">About Me</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/portfolio"> Portfolio</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/contact">Contact</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/resume">Resume</Link>
        </div>
      </section>
    </nav>
  );
}
