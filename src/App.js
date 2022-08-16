import styled from "styled-components";
import Header from "./containers/Header";
import Main from "./containers/Main";

function App() {
  return (
    <Window>
      <Header/>
      <Main/>
    </Window>
    
  );
}

const Window = styled.div`
  background-color: #fdf7fa;
  font-family: 'Ubuntu', sans-serif;
`

export default App;
