import React from 'react';

function Footer (props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
      <div className="container-fluid">
        <nav className="navbar navbar-dark">
          <span style={{color: 'white'}}>Copyright &copy; {new Date().getFullYear()}</span>
        </nav>
      </div>
    </nav>
  );
}

export default Footer;
