import React from 'react';

const Nasa = (props) => {
  return (
    <div>
      <h1>NASA FUN</h1>
      <img src={props.nasaData.url} alt="Nasa APOD" />
      <p>{props.nasaData.date}</p>
      <p>{props.nasaData.explanation}</p>
    </div>
  )
}

export default Nasa;