import React from 'react';
import Nav from ".././Components/Nav";

function Header() {

  return (
    <header className="flex-column px-1">
      <div className="logo">
        <h1>
            Welcome to my Portfolio Page!
        </h1>
      </div>
      <Nav></Nav>
    </header>
  );
}

export default Header;