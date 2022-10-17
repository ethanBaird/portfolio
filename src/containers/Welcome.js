import styled from "styled-components"
import WelcomeText from "../components/WelcomeText"

const Welcome = () => {
    return (
        <Wrapper>
            <DP src={process.env.PUBLIC_URL + '/dp.JPG'} alt='Profile Img'/>
            <WelcomeText/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const DP = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`

export default Welcome;