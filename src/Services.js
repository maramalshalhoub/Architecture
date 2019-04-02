import React, { Component } from 'react';
import data from './data'
import Card from 'react-bootstrap/Card';

export default class Services extends Component {
    constructor(props){
        super(props);
        this.state ={
            properties: data.properties,
            // made first one only active
            property:data.properties[0]
        }
    }
// Method worked only when on click on button
// These methods resets the props state 
    nextProperty = () =>{
        const nextIndex=this.state.property.index+1;
        this.setState({property:data.properties[nextIndex]})
    }
    prevProperty = () =>{
        const nextIndex=this.state.property.index-1;
        this.setState({property:data.properties[nextIndex]})
    }



  render() {
    //   const l= property.index;
      const {properties, property} = this.state;

      return (

<div>
        <button  onClick={()=>this.nextProperty()}
            disabled={property.index===data.properties.length-1}>
           Next
        </button>
        <button  onClick={()=>this.nextProperty()}
            // disabled={l===0}
            >
           Previous
        </button>

    <div className="page">
        <section>
           
            <h1>Slide Show Services </h1>
        </section>
{/* Render and align everything in  the middle */}
        <div className={`cards-slider active-slide-${property.index}`}>
{/* To stretch all the cards next to each other
Created inline style that calculates the transfom  
to move all cards to the exact off set calculated  */}
        <div className="cards-slider-wrapper" style={{
            'transform':`translateX(-${property.index*(100/properties.length)}%)`}}>
            {
             properties.map(property => 
             <Card key="property.id" property={property} />)
            }
        </div> 
        </div>
    </div>
</div>
)
  }
}


