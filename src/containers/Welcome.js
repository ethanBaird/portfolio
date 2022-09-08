import styled from "styled-components"
import WelcomeText from "../components/WelcomeText"

const Welcome = () => {
    return (
        <Wrapper>
            <WelcomeText></WelcomeText>
            <DP src={process.env.PUBLIC_URL + '/dp.JPG'} alt='Profile Img'/>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const DP = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`

export default Welcome;