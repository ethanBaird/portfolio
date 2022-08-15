import styled from "styled-components";

const Header = () => {
    return(
        <Wrapper>
            <Title>site under construction</Title>
        </Wrapper>
    )
};

const Wrapper = styled.header`
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    font-family: monospace;
    padding: 10em;
    margin: 8em;
    border-radius: 5px;
    box-shadow: 0 0 16px black;
`

const Title = styled.h1`
    color: #ff6633;

`

export default Header;