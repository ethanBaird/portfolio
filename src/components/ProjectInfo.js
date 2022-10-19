import styled from "styled-components"

const ProjectInfo = ({name, img, blurb, github}) => {
    return(
        <ProjectItem>
            <Heading>
                <Name>{name}</Name>
                <Logo src={process.env.PUBLIC_URL + img}
                    height="45px"
                    width='45px'
                />
            </Heading>
            <Blurb>{blurb}</Blurb>
            
            <Github href={github}>see on github</Github>
        </ProjectItem>
    )

}

const ProjectItem = styled.li`
    border: solid grey 3px;
    border-radius: 5px;
    width: 30%;

    padding: 5px;
`

const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.h3``

const Logo = styled.img`
    border-radius: 50%;
`

const Blurb = styled.p``

const Github = styled.a``

export default ProjectInfo