import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
export default class Services extends Component {


  render() {


    return (
      <div>
        <CardGroup>
        <Card>
        <Card.Img variant="top" src="https://i.ibb.co/jzz5dxZ/Architectural-Engineers.jpg" />
          <Card.Body>
            <Card.Title>Architecture</Card.Title>
            <Card.Text>
                We are an architectural interior and Project management office,<br/> experienced in the Saudi market that select the best team of professionals<br/> and companies in order to achieve the goals of every project we develop.                
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://i.ibb.co/jzz5dxZ/Architectural-Engineers.jpg" />
          <Card.Body>
            <Card.Title>Interior Design</Card.Title>
            <Card.Text>
                 We are an architectural interior and Project management office, experienced in the 
            </Card.Text>
          </Card.Body>
     
        </Card>
        <Card>
        <Card.Img variant="top" src="https://i.ibb.co/jzz5dxZ/Architectural-Engineers.jpg" />
          <Card.Body>
            <Card.Title >Project Management</Card.Title>
            <Card.Text>
            We are an architectural interior and Project management office, experienced in the 
            </Card.Text>
          </Card.Body>
          
        </Card>
      </CardGroup>
    </div>
    )
}}
