import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  

 class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
<div>
  <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home" padding="0" margin="0"><img src="https://i.ibb.co/DR9HHc4/logoNew.png" alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Projects/">Projects</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  Architecture
                  </DropdownItem>
                  <DropdownItem>
                  Interior Design
                  </DropdownItem>
                  <DropdownItem>
                  Project Management
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/Portfolio/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ContactUs/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
  </div>
  <div>
    <img src="https://i.ibb.co/TmnXYkz/image-2019-03-31.jpg" width="1280px"/>
  </div>
</div>
    )
  }
}
export default Header;
