import React from 'react';
import styled, { keyframes } from 'styled-components';



const kf = keyframes`

img:hover {
  
  animation: shake 2.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
50% { transform: translate(-1px, 2px) rotate(-1deg); }
}
`;





const Img = styled.img`
img {} border-radius: 75%}
img {} max-width: 35%}
`;


const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #DB7093;
`;

const StyledNasa = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.0em;
  color: orchid;
  
`

const Nasa = (props) => {
  return (
    
    <StyledNasa>
      <H1>NASA by Ariana Grande is a great song</H1>
      <Img src={props.nasaData.url} alt="Nasa APOD" />
      <p>{props.nasaData.date}</p>
      <p>{props.nasaData.explanation}</p>
    </StyledNasa>
  )
}

export default Nasa;

