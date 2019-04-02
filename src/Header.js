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
  import Services from './Services';

 class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      page:'home',
      details:[]
    };
  }
// on click services takes me to services
  handleServices= ()=>{
    this.setState({page:'services'});
    const service = <Services />
    this.setState({details:service})
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const change = (this.state.page)==='home'? ' is-active' : ' in-active';
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
                  <DropdownItem onClick={()=>this.handleServices()}>
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
  {this.state.details}
  <div className={change}>
    <img src="https://i.ibb.co/TmnXYkz/image-2019-03-31.jpg" width="1280px"/>
  </div>
</div>
    )
  }
}
export default Header;
