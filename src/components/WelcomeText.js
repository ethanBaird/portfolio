import styled from "styled-components"

const WelcomeText = () => {
    return (
        <Wrapper>
            <Name>ethanBaird</Name>
            <Title>softwareDeveloper</Title>
        </Wrapper>
    )
}
    

const Wrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
`

const Name = styled.h1``

const Title = styled.h2``

export default WelcomeText