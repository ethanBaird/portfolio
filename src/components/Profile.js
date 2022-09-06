import styled from "styled-components";

const Profile = () => {
    return (
        <Wrapper>
            <h2>Profile</h2>
            <p>I’m a career changer looking for my first position as a software developer.</p>
            <p>With a professional background in the performing arts, retail and customer services I’d love to use my unique experience to strengthen your team.</p>
            <p>I'm an avid music fan and gig goer, lover of movies and musicals and quickly developing an unhealthy obsession with F1 (thanks Drive To Survive...)</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    color: #e0e0e2;

    border-radius: 5px;
    box-shadow: 0 0 8px #ffb100;

    width: 50%;
    padding: 16px;

    h2 {
        margin-top: 0px;
    }

    p {
        margin-bottom: 0px;
    }

    transition: 350ms ease-in;

    &:hover{
        transform: scale(1.01, 1.01)
    }
    `

export default Profile;