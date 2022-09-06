import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./containers/Header";
import Main from "./containers/Main";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function App() {
  
  
  return (
  <Router>
    <Nav/>
    <Routes>
      <Route exact path="/#main" element={< Main />} />
    </Routes>
  </Router>
);  
}

const Window = styled.div`
  background-color: #003844;
  min-height: 100vh;
  font-family: 'Ubuntu', sans-serif;
`

export default App;
