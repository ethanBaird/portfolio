import styled from "styled-components";

const Header = () => {
    return(
        <Wrapper>
            <Title>Ethan <span>Baird</span></Title>
            <Subtitle>SOFTWARE <span>DEVELOPER</span></Subtitle>
        </Wrapper>
    )
};

const Wrapper = styled.header`
    background-color: #fdf7fa;
    
    text-align: center;
    font-family: 'Ubuntu', sans-serif;

    padding: 16px;
    box-shadow: 0 0 16px black;
`

const Title = styled.h1`
    color: #545454;

    span {
        color: #ff5757;
    }
`

const Subtitle = styled.h2`
    color: #545454;

    span {
        color: #ff5757;
    }
`

export default Header;