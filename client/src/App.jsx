import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

import MapComponent from './MapComponent'

function App() {
//   const fetchAPI = async () => {
//     const response = await axios.get("http://127.0.0.1:8080/api/users");
//     console.log(response.data);
//   }
//
//   useEffect(() => {
//     fetchAPI();
//   }, []);

  return (
    <>
      <MapComponent />
    </>
  )
}

export default App
