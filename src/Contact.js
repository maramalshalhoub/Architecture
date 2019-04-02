import React, { Component } from 'react';
import data from './data'
import Carousel from 'react-bootstrap/Carousel'

export default class Contact extends Component {
// constructor(props, context) {
//     super(props, context);

//     this.handleSelect = this.handleSelect.bind(this);

//     this.state = {
//       index: 0,
//       direction: null,
//     };
//   }

//   handleSelect(selectedIndex, e) {
//     this.setState({
//       index: selectedIndex,
//       direction: e.direction,
//     });
//   }

  render() {

    return (
        <div>
            <h1>
                Contact Us
            </h1>
            <h5>
                Name: 
            </h5>
            <p className="con">Saleh bin Shalhoub</p>
            <h5>
                Mobile: 
            </h5>
            <p className="con">+966 555077794</p>
            <h5>
                Email: 
            </h5>
            <p className="con"> sbinshalhoub@gmail.com</p>
        </div>
    )
}}
