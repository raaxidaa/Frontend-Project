import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.nav') === null) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='nav'>
            <div className="left">
                <NavLink to="/" > <img src="/Logo.png" alt="Logo" /></NavLink>
                <div className={`links desktop-links ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/investor" activeclassname="active">For Investor</NavLink>
                    <NavLink to="/startups" activeclassname="active">For Startups</NavLink>
                    <NavLink to="/jobs" activeclassname="active">Find Jobs</NavLink>
                    <NavLink to="/browsestartups" activeclassname="active">Browse Startups</NavLink>
                    <NavLink to="/seekfunding" activeclassname="active">Seek Funding</NavLink>
                    <NavLink to="/company" activeclassname="active">Company</NavLink>
                </div>
            </div>
            <div className={`menu-icon ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                <span>☰</span>
            </div>
            <div className={`mobile-links ${isMenuOpen ? 'open' : ''}`}>
                <NavLink to="/investor" activeclassname="active">For Investor</NavLink>
                <NavLink to="/startups" activeclassname="active">For Startups</NavLink>
                <NavLink to="/jobs" activeclassname="active">Find Jobs</NavLink>
                <NavLink to="/browsestartups" activeclassname="active">Browse Startups</NavLink>
                <NavLink to="/seekfunding" activeclassname="active">Seek Funding</NavLink>
                <NavLink to="/company" activeclassname="active">Company</NavLink>
            </div>
            <div className="right">
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;
