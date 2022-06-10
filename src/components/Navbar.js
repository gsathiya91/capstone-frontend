import React from 'react';


function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">Product Search For Your Style </a>
          <div className="buttons">
            <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus" aria-hidden="true"></i> Register</a>&nbsp;
            <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in" aria-hidden="true"></i> Login</a>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;