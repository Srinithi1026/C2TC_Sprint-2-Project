import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Student App</Link>
      <div>
        <Link className="btn btn-outline-light mx-2" to="/">Home</Link>
        <Link className="btn btn-outline-light mx-2" to="/students">View Students</Link>
        <Link className="btn btn-outline-light mx-2" to="/add">Add Student</Link>
        <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
