import React from 'react';

const Navigation = ({ handleNavigation }) => {
  return (
    <nav>
      <div id="hamburger" className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-link">
        <li onClick={() => handleNavigation('Home')}>Home</li>
        <li onClick={() => handleNavigation('about')}>About</li>
        <li onClick={() => handleNavigation('admission')}>Admission</li>
      </ul>
    </nav>
  );
};

export default Navigation;
