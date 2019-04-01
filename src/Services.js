import React, { Component } from 'react';
import data from './data'

export default class Services extends Component {
    constructor(props){
        super(props);
        this.state ={
            properties: data.properties,
            property:data.properties[0]
        }
    }
Method
    nextProperty = () =>{
        const nextIndex=this.state.property.index+1;
        this.setState({property:data.properties[nextIndex]})
    }
    prevProperty = () =>{
        const nextIndex=this.state.property.index-1;
        this.setState({property:data.properties[nextIndex]})
    }
  render() {
      const {properties, property} = this.state;
    return (
      <div>
        <button  onClick={()=>this.nextProperty()}
            disabled={property.index===data.properties.length-1}>
           Next
        </button>
        <button  onClick={()=>this.nextProperty()}
            disabled={property.index===0}>
           Previous
        </button>
      </div>
    )
  }
}
