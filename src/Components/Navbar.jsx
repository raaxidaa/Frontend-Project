import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="left">
            <NavLink to="/" > <img src="public/Logo.png" alt="" /></NavLink>
                <div className="links">
                    <NavLink to="/investor" activeclassname="active">For Investor</NavLink>
                    <NavLink to="/startups" activeclassname="active">For Startups</NavLink>
                    <NavLink to="/jobs" activeclassname="active" >Find Jobs</NavLink>
                    <NavLink to="/browsestartups" activeclassname="active">Browse Startups</NavLink>
                    <NavLink to="/seekfunding" activeclassname="active">Seek Funding</NavLink>
                    <NavLink to="/company" activeclassname="active">Company</NavLink>
                </div>
            </div>
            <div className="menu-icon">☰</div>
            <div className="right">
              <button>Log In</button>
              <button>Sign Up</button>
            </div>

        </div>
    )
}

export default Navbar