// Footer.js
import React from 'react';
import logo from '/logo.png';

const Footer = () => {
  return (
   
    <footer class="footer">

<div className="row">
  <div className="col-4">
    <div className="footer-logo">
      <img
        src={logo}
        className="footer-logo-image"
        alt="ISPSC Logo"
      />
      <p>
        Ilocos Sur Polytechnic State College <br />
        Tagudin Campus
      </p>
    </div>
  </div>
  <div className="col-4">
    <div className="footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/what-we-offer">Programs</a>
        </li>
        <li>
          <a href="/admission-requirements">Admissions</a>
        </li>
        <li>
          <a href="/contacts">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="col-4">
    <div className="footer-links">
      <h4>Contact Us</h4>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:ispsctagudin@yahoo.com">ispsctagudin@yahoo.com</a>
        </li>
        <li>Phone: 077-674-1474</li>
        <li>Address: Quirino, Tagudin, Ilocos Sur</li>
      </ul>
    </div>
  </div>
</div>

  
    </footer>
 
  );
};

export default Footer;
