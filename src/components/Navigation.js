import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navLinkStyles = {color: 'white'}

  return (
    <nav>
      <h3>Logo</h3>
      <ul className ='nav-link'>
        <li>
          <Link to="/" /* dùng link thay cho href, khi link không bị refresh lại tất cả các components */
          style={navLinkStyles}>Home</Link>
        </li>
        <li>
          <Link to="/products" 
          style={navLinkStyles}>Product</Link>
        </li>
        <li>
          <Link to="/about" 
          style={navLinkStyles}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation