import styled from "styled-components"

const Project = ({projectData}) => {
    return(
        <>
            <h2>{projectData.name}</h2>
            <Logo src={process.env.PUBLIC_URL + projectData.img}
                height="150px"
                width='150px'
            />
            <p>{projectData.github}</p>
        </>
       
    )
}

const Logo = styled.img`
    border-radius: 50%;
`

export default Project