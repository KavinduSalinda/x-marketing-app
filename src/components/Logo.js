import React from 'react';
import logo from '../assets/xmm-logo.png';
import '../styles/Logo.css';

function Logo({ altText = "XMM Logo", className = "", style = {} }) {
  return (
    <div className={`logo-container ${className}`} style={style}>
      <img src={logo} alt={altText} className="logo-image" />
    </div>
  );
}

export default Logo;
