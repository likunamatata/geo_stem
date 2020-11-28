import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../media/geo_stem.png'


function Nav() {
  return (
    <div className='header'>
      <div className="nav">
        <NavLink to='/' className='navLink'>ჩვენ შესახებ</NavLink>
        <NavLink to='/Resources' className='navLink'>რესურსები</NavLink>
        <NavLink to='/Mentorship' className='navLink'>სადამრიგებლო პროგრამა</NavLink>
      </div>
      <img src={logo} id='logo'/>
    </div>
  );
}

export default Nav;
