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
    text-align: center;
    padding: 16px;
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