import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Welcome from "./containers/Welcome";

function App() {
  
  
  return (
  <>
    <Header/>
    <Welcome/>
  </>
);  
}

const Window = styled.div`
  background-color: #003844;
  min-height: 100vh;
  font-family: 'Ubuntu', sans-serif;
`

export default App;
