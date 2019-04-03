import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Projects from './Projects'
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

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
// on click Projects takes me to Map
handleProjects= ()=>{
  this.setState({page:'projects'});
  const project = <Projects />
  this.setState({details:project})
}
// on click services takes me to services
  handleServices= ()=>{
    this.setState({page:'services'});
    const service = <Services />
    this.setState({details:service})
  }
// on click portfolio to slideshow
handlePortfolio= ()=>{
  this.setState({page:'portfolios'});
  const portfolio = <Portfolio />
  this.setState({details:portfolio})
}
// contact us method
handleContact= ()=>{
  this.setState({page:'contactus'});
  const contact = <Contact />
  this.setState({details:contact})
}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const change = (this.state.page)==='home'? ' is-active' : ' in-active';
    console.log(this.state.details);
    
    return (
<div>
{/* Div that handles navigation bar */}
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
                <NavLink onClick={this.handleProjects}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleServices}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handlePortfolio}>Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleContact}>Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
  </div>
  {this.state.details}
  <div className={change}>
    <img src="https://i.ibb.co/TmnXYkz/image-2019-03-31.jpg" width="1280px"/>
  </div>

{/* Div that handles the home page cards*/}
  <div>
      <div className={change}>
        <CardGroup>
        <Card>
        <Card.Img variant="top" src="https://i.ibb.co/jzz5dxZ/Architectural-Engineers.jpg" />
          <Card.Body>
            <Card.Title>About Us</Card.Title>
            <Card.Text>
                We are an architectural interior and Project management office,<br/> experienced in the Saudi market that select the best team of professionals<br/> and companies in order to achieve the goals of every project we develop.                
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/jzz5dxZ/Architectural-Engineers.jpg" />
          <Card.Body>
            <Card.Title onClick={this.handleProjects}>Projects</Card.Title>
            <Card.Text>
                 We are an architectural interior and Project management office, experienced in the 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted" onClick={this.handleProjects}>Read more..</small>
          </Card.Footer>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://i.ibb.co/jzz5dxZ/Architectural-Engineers.jpg" />
          <Card.Body>
            <Card.Title onClick={this.handleServices} >Services</Card.Title>
            <Card.Text>
            We are an architectural interior and Project management office, experienced in the 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted" onClick={this.handleServices}> Read more..</small>
          </Card.Footer>
        </Card>
      </CardGroup>

{/* Div that handles clients in one container  */}
      <div>
      <h4>Some of Our Clients</h4>
      <Container>
        <Row>
        <Col>
            <Card>
            <Card.Img variant="top" src="https://i.ibb.co/yBdXqN1/d6e87ffd-fb4f-400e-a0e9-6504391e55d3-16x9-1200x676.jpg" height="195px" width="200px"/>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src="https://i.ibb.co/tKd6Ksq/RUlbh-XYL-400x400.jpg" height="195px" width="200px"/>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src="https://i.ibb.co/YXGy7WQ/Only-Roses-square-logo-white-on-black.png" height="195px" />
            </Card>
        </Col>
        </Row>
        <Row>
        <Col>
            <Card>
            <Card.Img variant="top" src="https://i.ibb.co/y6hZpJ2/DOC8-G56-WAAIxe-WT.jpg" height="195px" />
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src="https://i.ibb.co/mqqNhKs/Tgkw-Bm3o-400x400.jpg" height="195px"/>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src="https://i.ibb.co/k8Ct9HP/images-2.jpg" height="195px" />
            </Card>
        </Col>
        </Row>
    </Container>
    </div>
    </div>
    </div>
</div>
    )
  }
}
export default Header;
