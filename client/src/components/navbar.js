import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Headers = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="nav">
      <Navbar color="faded" light>
        <div className="menu">
          <ul>
            <li>
              <NavbarBrand href="/" className="mr-auto">
                LOGO
              </NavbarBrand>
            </li>
            <li>
              <NavbarBrand href="././Homepage" className="mr-auto">
                HOME
              </NavbarBrand>
            </li>
            <li>
              <NavbarBrand href="././form.js" className="mr-auto">
                CONTACT
              </NavbarBrand>
            </li>
          </ul>
        </div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar clasName="toggle">
            <NavItem>
              <NavLink href="./" className="contact">
                about us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./shipping" className="shipping">
                shipping
              </NavLink>
              <NavItem>
                <NavLink href="./shop" className="shop">
                  shop
                </NavLink>
              </NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Headers;
