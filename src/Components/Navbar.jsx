import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="left">
            <NavLink to="/" > <img src="public/Logo.png" alt="" /></NavLink>
                <div className="links">
                    <NavLink to="/investor" activeClassName="active">For Investor</NavLink>
                    <NavLink to="/startups" activeClassName="active">For Startups</NavLink>
                    <NavLink to="/jobs" activeClassName="active" >Find Jobs</NavLink>
                    <NavLink to="/browsestartups" activeClassName="active">Browse Startups</NavLink>
                    <NavLink to="/seekfunding" activeClassName="active">Seek Funding</NavLink>
                </div>
            </div>
            <div className="right">
              <button>Log In</button>
              <button>Sign Up</button>
            </div>

        </div>
    )
}

export default Navbar