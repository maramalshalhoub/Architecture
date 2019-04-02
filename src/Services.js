import React, { Component } from 'react';
import data from './data'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
export default class Services extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             properties: data.properties,
//             // made first one only active
//             property:data.properties[0]
//         }
//     }
// // Method worked only when on click on button
// // These methods resets the props state 
//     nextProperty = () =>{
//         const nextIndex = this.state.property.index+1;
//         this.setState({property:data.properties[nextIndex]})
//     }
//     prevProperty = () =>{
//         const nextIndex=this.state.property.index-1;
//         this.setState({property:data.properties[nextIndex]})
//     }

//   render() {
//     const test= this.state.properties.map(property => {
//         return <div id={`card-${this.state.property.index}`} className="img">
//                  <img src={property.picture} />
//                  </div>
//   })
//    console.log(this.state.properties[0].picture);
//       return (
//     <div>
//         <button  onClick={()=>this.nextProperty()}
//             disabled={this.state.property.index===data.properties.length-1}>
//            Next
//         </button>
//         <button  onClick={()=>this.nextProperty()}
//             disabled={this.state.property.index===0}>
//            Previous
//         </button>

//         <div className="page">
//             <section>
//                 <h1>Services Accomplished</h1>
//             </section>
//         {/* Render and align everything in  the middle */}
//             <div className={`cards-slider active-slide-${this.state.property.index}`}>
//     {/* To stretch all the cards next to each other
//     Created inline style that calculates the transfom  
//     to move all cards to the exact off set calculated  */}
//     {/* style={{'transform':`translateX(-${this.state.property.index*(100/this.state.properties.length)}%)`}} */}
//                 <div className="cards-slider-wrapper">
//                     {test}
//                 </div>
                 
//             </div>
//         </div>
// </div>
// )
// }
// }
constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {

    let carousels = data.properties.map((item, index)=>{
return (
    <Carousel.Item key={index}>
    <img
      className="d-block w-100"
      src={item.picture}
      
    />
  </Carousel.Item>
)
    })

    const { index, direction } = this.state;

    return (
<div>
<Carousel   
        // activeIndex={index}
        // direction={direction}
        // onSelect={this.handleSelect}
        >
 
  {carousels}
</Carousel>
</div>
    )}}
    // render(<ControlledCarousel />);
