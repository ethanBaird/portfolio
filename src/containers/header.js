import styled from "styled-components";
import Profile from "../components/Profile";

const Header = () => {
    return(
        <Wrapper>
            <Title>Ethan <span>Baird</span></Title>
            <Subtitle>SOFTWARE <span>DEVELOPER</span></Subtitle>

        </Wrapper>
    )
};

const Wrapper = styled.header`
    text-align: center;
    padding: 16px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    color: #e0e0e2;
    font-size: 100px;

    span {
        color: #ffb100;
    }
`

const Subtitle = styled.h2`
    color: #e0e0e2;
    font-size: 80px;
    margin-top: 0;

    span {
        color: #ffb100;
    }
`

export default Header;