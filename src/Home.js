import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Projects from './Projects'
class Home extends React.Component {
  render() {
    return (
<div>
      <div>
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
            <Card.Title>Projects</Card.Title>
            <Card.Text>
                 We are an architectural interior and Project management office, experienced in the 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted"> <Projects  /><a href="Projects.js"> Read more..</a></small>
          </Card.Footer>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://i.ibb.co/jzz5dxZ/Architectural-Engineers.jpg" />
          <Card.Body>
            <Card.Title>Services</Card.Title>
            <Card.Text>
            We are an architectural interior and Project management office, experienced in the 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> <a href="services.html"> Read more..</a></small>
          </Card.Footer>
        </Card>
      </CardGroup>
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
    );
  }
}
export default Home;