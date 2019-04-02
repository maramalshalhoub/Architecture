import React, { Component } from 'react'

const Card =({property}) => {
    const {index,picture} = property;
    return (
      <div id={`card-${index}`} className="card">
        <img src={picture} />
        <div className="details">
        <span className="index">{index+1}</span>
        </div>
      </div>
    )
  }

export default Card