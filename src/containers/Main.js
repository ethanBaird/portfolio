import styled from "styled-components";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";
import { HashLink as Link } from "react-router-hash-link";

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
    display: flex;
    flex-direction: column;
    align-items: center;
`