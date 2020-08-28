import React from 'react';
import { Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';
import logo from './img/logo.png';
const Navbar =()=>{
    return(
        
      <>
      <Nav id="navbar">
        <NavbarBrand>
          <img src={logo} alt="logo" id="logo"/> 
          | Andrew A.K.
          </NavbarBrand>
        <NavItem>
          <NavLink href="https://github.com/akarpisz">Github</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://akarpisz.github.io/masterproject1">| Brews and Blues Search Engine</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://fitness-tracker-ak.herokuapp.com">| Fitness-Tracker</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://project-2c.herokuapp.com/">| oTravelTo</NavLink>
        </NavItem>
      </Nav>
      <hr />
      </>
    );
}
export default Navbar;