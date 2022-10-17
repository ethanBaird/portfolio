import { TypeAnimation } from "react-type-animation"
import styled from "styled-components"

const WelcomeText = () => {
    return (
        <Wrapper>
            <h1>ethanBaird</h1>
            <h2>softwareDeveloper</h2>
        </Wrapper>
    )
}
    

const Wrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export default WelcomeText