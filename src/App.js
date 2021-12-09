import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import Nasa from './Components/Nasa';

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        setNasaData(res.data);
      }).catch(err => console.error(err))
  }, [])
  return (
    <div className="App">
      {nasaData && <Nasa nasaData={nasaData} /> }
    </div>
  );
}

export default App;
