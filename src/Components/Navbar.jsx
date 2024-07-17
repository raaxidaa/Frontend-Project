import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="left">
                <img src="public/Logo.png" alt="" />
                <div className="links">
                    <NavLink to="/" >For Investor</NavLink>
                    <NavLink to="/startups" >For Startups</NavLink>
                    <NavLink to="/jobs" >Find Jobs</NavLink>
                    <NavLink to="/browsestartups" >Browse Startups</NavLink>
                    <NavLink to="/seekfunding" >Seek Funding</NavLink>
                </div>
            </div>
            <div className="right">
                <NavLink to="/login" >Log In</NavLink>
                <NavLink to="/signup" >Sign Up</NavLink>
            </div>

        </div>
    )
}

export default Navbar