import styled from "styled-components";
import Nav from "../components/Nav";
import Icon from "../components/Icon"

const Header = () => {
    return(
        <Wrapper>
            <Icon/>
            <Nav/>
        </Wrapper>
    )
};

const Wrapper = styled.header`
    text-align: center;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export default Header;