import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.jpg';
import { AuthContext } from '../../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="container navbar sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logoImg} alt="logo" height="75" />
        </div>
        <div className="d-flex align-items-center">
          <div className="mx-3">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          <div className="mx-3">
            <Link to="/about" className="nav-link">About Us</Link>
          </div>
          <div className="mx-3">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </div>
          <div className="mx-3">
            <Link to="/faqs" className="nav-link">FAQs</Link>
          </div>
          <div className="col mx-3">
            {currentUser ? (
              <>
                <div className="btn btn-outline-secondary mx-2 disabled">
                  {currentUser.email}
                </div>
                <div
                  onClick={() => logout()}
                  className="btn btn-outline-secondary mx-2"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
