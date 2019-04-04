import React, { Component } from 'react'
import ReactMapboxGl, {Marker, Layer, Feature, ZoomControl } from "react-mapbox-gl";

export default class Projects extends Component {  
handleClick=(e)=>{
  console.log(e.target.textContent)
  if (e.target.textContent == "Project Management Service"){
    window.location.href = "https://i.ibb.co/T2yphkW/PHOTO-2019-02-17-11-53-00-3.jpg";
  }else if(e.target.textContent == "Architecture and Interior Design"){
    window.location.href = "https://i.ibb.co/p1HDL1w/Screen-Shot-2019-04-04-at-7-40-52-AM.png";
  }else if(e.target.textContent == "Interior Design"){
    window.location.href = "https://i.ibb.co/ZKhbhpS/v3-4.jpg";
  }else if(e.target.textContent == "Architecture"){
    window.location.href = "https://i.ibb.co/MVfgSSV/v4.jpg";
  }
}

  render() {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoibWFyYW0tc2giLCJhIjoiY2p1MHZxdXRsMngybTQ1bnBxaGM2a3J4cyJ9.DRkSy0HICip-PphzpPkI3Q"
    });
    
  return (
    <div >
      {/* First install (npm install react-mapbox-gl mapbox-gl --save) */}
        <Map className="map"
            center={[46.738586,24.774265]}
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "80vh",
              width: "100vw",
            }}>
            <Layer  
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[46.588712, 24.745419]} />
              <Feature coordinates={[46.682250, 24.665863]} />
              <Feature coordinates={[46.645264, 24.724483]} />   
              <Feature coordinates={[46.665580, 24.809238]} />
            </Layer>
              <Marker  
                onClick={this.handleClick} 
                  coordinates={[46.588712, 24.745419]}
                  offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}
                  >
                  <h6>Project Management Service</h6>
              </Marker> 
              <Marker   
                  onClick={this.handleClick} 
                  coordinates={[46.682250, 24.665863]}
                  offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}>
                  <h6>Architecture and Interior Design</h6>
              </Marker>
              <Marker  
                  onClick={this.handleClick} 
                  coordinates={[46.645264, 24.724483]}
                  offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}>
                  <h6>Architecture</h6>
              </Marker> 
              <Marker   
                  onClick={this.handleClick} 
                  coordinates={[46.665580, 24.809238]}
                  offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}>
                  <h6>Interior Design</h6>
              </Marker> 
          <ZoomControl />
        </Map>
    </div>
    )
  }
}

