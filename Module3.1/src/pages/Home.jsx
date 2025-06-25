import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about-us">
        <button>Travel to about us</button>
      </Link>
    </>
  )
}

export default Home