import styled from "styled-components";
import Header from "./containers/Header";
import Welcome from "./containers/Welcome";

function App() {
  
  
  return (
    <Window>
      <Header/>
      <Welcome/>
    </Window>
  );  
}

const Window = styled.div`
  background-color: #003844;
  min-height: 100vh;
  font-family: 'Ubuntu', sans-serif;
`

export default App;
