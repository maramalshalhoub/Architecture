import React, { Component } from 'react'
import axios from 'axios';
// import Geocoder from '@mapbox/react-geocoder'
// import ReactMapboxGl from "react-mapbox-gl";
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl } from "react-mapbox-gl";

export default class Projects extends Component {
  // componentDidMount(){
  //   let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFyYW0tc2giLCJhIjoiY2p1MHZxdXRsMngybTQ1bnBxaGM2a3J4cyJ9.DRkSy0HICip-PphzpPkI3Q";
  //   axios(url).then(response=>{
  //     console.log(response);
  //   })
  //   .catch()
  // }



  render() {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoibWFyYW0tc2giLCJhIjoiY2p1MHZxdXRsMngybTQ1bnBxaGM2a3J4cyJ9.DRkSy0HICip-PphzpPkI3Q"
    });
    
   
    return (
      <div >
{/* <Geocoder
  accessToken="pk.eyJ1IjoibWFyYW0tc2giLCJhIjoiY2p1MHZxdXRsMngybTQ1bnBxaGM2a3J4cyJ9.DRkSy0HICip-PphzpPkI3Q"
  onSelect={search_text()} */}
  {/* // onSuggest=optional function
  // source=optional string, default 'mapbox.places'
  // endpoint=optional string, default 'http://api.tiles.mapbox.com'
  // inputClass=optional string, default ''
  // inputPlaceholder=optional string, default 'Search'
  // resultClass=optional string, default ''
  // resultsClass=optional string, default ''
  // showLoader=optional string, default ''
  // inputPosition=optional string, default 'top', can be 'bottom'
  // resultFocusClass=optional string, default 'strong'
  // proximity=optional string, default '',
  // bbox=optional string, default '',
  // types=optional string, default '',
  // focusOnMount=optional bool, default true
  /> */}
   {/* <Map style="mapbox://styles/mapbox/streets-v8"/> */}
   {/* First install (npm install react-mapbox-gl mapbox-gl --save) */}
    <Map className="map"
        center={[46.738586,24.774265]}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "80vh",
          width: "100vw",
        }}>
            {/* <Layer 
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
               <Feature coordinates={[46.588712, 24.745419]} />
            </Layer> */}
             <Popup   
                      coordinates={[46.588712, 24.745419]}
                      offset={{
                        'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                      }}
                      >
                      <h6>Project Management Service</h6>
            </Popup>
           {/* <Layer 
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
               <Feature coordinates={[46.682250, 24.665863]} />
            </Layer> */}
            {/* <Popup   
                      coordinates={[46.682250, 24.665863]}
                      offset={{
                        'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                      }}>
                      <h6>Architecture and Interior Design</h6>
            </Popup>
            <Layer 
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
               <Feature coordinates={[46.645264, 24.724483]} />   
            </Layer>
            <Popup    
                coordinates={[46.645264, 24.724483]}
                offset={{
                  'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>
                <h6>Architecture and Interior Design</h6>
            </Popup>
            <Layer 
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
               <Feature coordinates={[46.665580, 24.809238]} />
            </Layer>
            <Popup   
                coordinates={[46.665580, 24.809238]}
                offset={{
                  'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>
                <h6>Interior Design</h6>
            </Popup> */}
           <ZoomControl />
    </Map>
</div>
    )
  }
}

