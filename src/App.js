import { useState } from "react";
import styled from "styled-components";
import Projects from "./containers/Projects";
import Welcome from "./containers/Welcome";

function App() {

  const [projectData, setProjectData] = useState([
    {
      name: 'Financial Gains House',
      img: '/fgh.png',
      blurb: 'Full stack React/Express app which uses visual data to allow a user to view current stock values and trends, and purchase stocks for their personal portfolio.',
      github: 'https://github.com/ethanBaird/Financial_Gains_House',
    },
    {
      name: 'ScranScanner',
      img: '/scranscanner.png',
      blurb: 'Mobile application built with React Native allowing users to search for restaurants, leave reviews and manage bookings.',
      github: 'https://github.com/ethanBaird/ScranScanner',
    },
    {
      name: 'trackside',
      img: '/trackside.png',
      blurb: 'Full stack flask application for tracking formula 1 results',
      github: 'https://github.com/ethanBaird/trackside',
    }
  ])
  
  
  return (
    <Window>
      <Welcome/>
      <Projects projectData={projectData}/>
    </Window>
  );  
}

const Window = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;


  
  font-family: 'Ubuntu', sans-serif;
`

export default App;
