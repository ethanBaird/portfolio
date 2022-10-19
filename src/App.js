import styled from "styled-components";
import Welcome from "./containers/Welcome";

function App() {
  
  
  return (
    <Window>
      <Welcome/>
      <Project/>
    </Window>
  );  
}

const Window = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Ubuntu', sans-serif;
`

export default App;
