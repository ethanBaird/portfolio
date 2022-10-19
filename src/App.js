import { useState } from "react";
import styled from "styled-components";
import Project from "./containers/Project";
import Welcome from "./containers/Welcome";

function App() {

  const [tracksideData, setTracksideData] = useState({
    name: 'trackside',
    img: '/trackside.png',
    github: 'to add',
  })

  const [stockData, setStockData] = useState({
    name: 'Financial Gains House',
    img: '/fgh.jpeg',
    github: 'to add',
  })

  const [scranscannerData, setScranscannerData] = useState({
    name: 'ScranScanner',
    img: '/scranscanner.png',
    github: 'to add',
  })
  
  
  return (
    <Window>
      <Welcome/>
      <Project projectData={tracksideData}/>
      <Project projectData={stockData}/>
      <Project projectData={scranscannerData}/>
    </Window>
  );  
}

const Window = styled.div`
  min-height: 100vh;
  
  font-family: 'Ubuntu', sans-serif;
`

export default App;
