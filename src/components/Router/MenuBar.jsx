import React from 'react'
import {Link} from 'react-router-dom';
function MenuBar() {
  return (
    <div>
      <Link to="/"> Home</Link>
      <Link to="/about"> About Us</Link>
      <Link to="/contact"> Contact US</Link>
    </div>
  )
}

export default MenuBar;