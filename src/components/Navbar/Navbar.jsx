import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img className='logo' src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-2 fs-24 ls-1'>BookRealm</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{ color: `${toggleMenu ? "#fff" : "#010101"}` }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='navHorItem'>
              <Link to="/">Home</Link>
            </li>
            <li className='navHorItem'>
              <Link to="shelf">My Shelf</Link>
            </li>
            <li className='navHorItem'>
              <Link to="about">About</Link>
            </li>
            
            { isAuthenticated && (
              <li className='navHorItem'>
                <p>{`${user.name.split(' ')[0].charAt(0)}${user.name.split(' ')[1].charAt(0)}`}</p>
              </li>
            )}

            { isAuthenticated ? (
              <li className='navHorItem'> 
                <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
              </li>
            ) : (
              <li className='navHorItem'>
                <button onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
