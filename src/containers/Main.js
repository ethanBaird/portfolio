import styled from "styled-components";
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
`