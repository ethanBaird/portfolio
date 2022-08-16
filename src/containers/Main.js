import styled from "styled-components";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";

const Main = () => {
    return(
        <Wrapper>
            <Profile/>
            <ProjectList/>
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div`
    background-color: #fdf7fa;
    display: flex;
    flex-direction: column;
    align-items: center;
`