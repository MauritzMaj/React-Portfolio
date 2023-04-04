import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "../../src/Assets/Images/profile-pic.jpg";


function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hello, My name is Mauritz!</h2>
        <p>Welcome to my Student Portfolio!</p>
        <Link to="/portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Home;