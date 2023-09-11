import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
       <footer>
      <div className="footer-content col-12 container">
        <ul className="d-flex justify-content-between">
          <li className="logo col-12 col-sm-2">Rock Music Festival</li>
          <li><Link to="">Instagram</Link></li>
          <li><Link to="">Facebook</Link></li>
          <li><Link to="">Tik-Tok</Link></li>
          <li><Link to="">Copywriter 2022</Link></li>
          <li><Link to="">Privacy Policy</Link></li>
          <li><Link to="">Cookie Policy</Link></li>
        </ul>
      </div>
    </footer>
    </div>
  )
}
