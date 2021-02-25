import React from 'react';

function Header (props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
      <div className="container-fluid d-flex justify-content-between">
        <h4 className="navbar-brand">React movies</h4> <a className="navbar-brand" href="!#">Repo</a>
      </div>
    </nav>
  );
}

export default Header;
