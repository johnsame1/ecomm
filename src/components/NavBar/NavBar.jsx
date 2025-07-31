import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { FaTruck } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data = [
    { icon: <FaTruck />, topic: 'Free shipping on orders up 9999 LE' },
    { icon: <FaTruck />, topic: 'Free shipping on orders up 9999 LE' },
    { icon: <FaTruck />, topic: 'Free shipping on orders up 9999 LE' },
    { icon: <FaTruck />, topic: 'Free shipping on orders up 9999 LE' },
    { icon: <FaTruck />, topic: 'Free shipping on orders up 9999 LE' },
    { icon: <FaTruck />, topic: 'Free shipping on orders up 9999 LE' },
    { icon: <FaTruck />, topic: 'Free shipping on orders up 9999 LE' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
      const user = JSON.parse(localStorage.getItem('User'));
      setUserRole(user?.role || null);
    };
    checkLoginStatus();
    window.addEventListener('storageChange', checkLoginStatus);
    return () => window.removeEventListener('storageChange', checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('User');
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('storageChange'));
  };

  return (
    <div className="navbarLine">
      <div className="navbarLine-container">
        <div className="nav-items-wrapper">
          <div className="nav-items">
            {data.map((item, index) => (
              <div key={index} className="scroll-item">
                {item.icon} {item.topic}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="NavBar">
        <div className="container">
          <div className="logos">
            <Link to={'/'} className="logo">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>

          <button
            className="menu"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          <div className={`links ${isOpen ? 'open' : ''}`}>
            <div className="searchContainers">
            <CiSearch className="searchIcons" />
            <input
              type="text"
              placeholder="Find your favorite"
              className="searchInputs"
            />
          </div>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/shops" onClick={closeMenu}>
              Shops
            </Link>
            <Link to="/collection" onClick={closeMenu}>
              Collection
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
            

            {userRole === 'Admin' && (
              <Link
                to="/dashboardadmin"
                onClick={closeMenu}
                className="admin-link"
              >
                <FaTruck
                  style={{ marginRight: '6px', verticalAlign: 'middle' }}
                />
                Dashboard Admin
              </Link>
            )}

            <div className="Btn">
              <Link to="/booktable" onClick={closeMenu}>
                <button className="log"style={{textAlign:"center"}}>
                  <IoCartOutline />cart
                </button>
              </Link>
            </div>

            {isLoggedIn ? (
              <Link to="/login" className="log" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login" className="log" onClick={closeMenu}>
                Login
              </Link>
            )}
          </div>
          <div className="searchContainer">
            <CiSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Find your next favorite piece ..."
              className="searchInput"
            />
          </div>
          <div className="Btns">
            <Link to="/booktable">
              <button className="btnCreate">
                <IoCartOutline />
              </button>
            </Link>
            <div className="profile-dropdown">
              <button
                className="profile-dropdown-toggle"
                onClick={toggleDropdown}
              >
                <IoPersonOutline />
              </button>
              {dropdownOpen && (
                <div className="profile-dropdown-menu">
                  {isLoggedIn ? (
                    <button onClick={handleLogout} className="logout-button">
                      Logout
                    </button>
                  ) : (
                    <Link to="/login" onClick={toggleDropdown}>
                      Login
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
