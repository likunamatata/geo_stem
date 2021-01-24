import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../media/geo_stem.png'


class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navClass: 'Hide',
      logoClass: 'Show',
      exitMenuClass: 'Hide',
      hamburgerClass: 'Show'
    }
  }

  showNav = () => {
    this.setState({
      navClass: 'Show',
      exitMenuClass: 'Show',
      hamburgerClass: 'Hide',
      logoClass: 'Hide'
    })
  }

  hideNav = () => {
    this.setState({
      navClass: 'Hide',
      hamburgerClass: 'Show',
      exitMenuClass: 'Hide',
      logoClass: 'Show'
    })
  }
  
  render() {
    return (
      <div className='header'>
        <svg onClick={this.showNav} className={`hamburger${this.state.hamburgerClass}`}id='hamburger' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg>
        
      <div className={`nav`}>
        <NavLink to='/' className='navLink'>ჩვენ შესახებ</NavLink>
        <NavLink to='/Resources' className='navLink'>რესურსები</NavLink>
        <NavLink to='/Mentorship' className='navLink'>სადამრიგებლო პროგრამა</NavLink>
      </div>
        
      <div className={`navMobile${this.state.navClass}`}>
          <svg className={`exitMenu${this.state.exitMenuClass}`} onClick={this.hideNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/></svg>
        <NavLink to='/' className='navLink'>ჩვენ შესახებ</NavLink>
        <NavLink to='/Resources' className='navLink'>რესურსები</NavLink>
        <NavLink to='/Mentorship' className='navLink'>სადამრიგებლო პროგრამა</NavLink>
      </div>
                
        <img className={`logo${this.state.logoClass}`} src={logo} id='logo' alt='logo'/>
    </div>
    );
    
  }

}

export default Nav;
