import React from "react";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";

import { navItems } from "./navItems";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <NavbarBrand>IKBP</NavbarBrand>
          <Nav className="d-none d-sm-flex">
            {navItems.map((item, index) => {
              return (
                <Nav.Item>
                  <Nav.Link>{item.navText}</Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
