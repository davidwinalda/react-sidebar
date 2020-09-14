import React from 'react'
import {
  Link
} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Ini adalah page Home</h1>
      <p>More about <Link to="/about">me</Link></p>
    </div>
  );
}

export default Home;