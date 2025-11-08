import React from 'react';
import Button from '@mui/material/Button';
import SearchBox from './SearchBox'
import InfoBox from './infoBox.jsx';
import WeatherApp  from './weatherApp.jsx';

function App() {
  let clickButton = () => {
    console.log("Button is clicked!");
  }
  return (
    <>

      {/* <h1>Material UI Lecture</h1>
      <Button variant='contained'>Click me!</Button>
      <br />
      <br />
      <Button variant='contained' color='success' onClick={clickButton}>clicked</Button> */}

        {/* <SearchBox /> */}
        {/* <InfoBox /> */}

        <WeatherApp />
    </>
  )
}

export default App
