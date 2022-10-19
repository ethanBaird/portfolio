import styled from "styled-components"
import ProjectInfo from "../components/ProjectInfo"

const Projects = ({projectData}) => {
    
    const projectNodes = projectData.map((project) => {
        return (
            <ProjectInfo
                name={project.name}
                img={project.img}
                blurb={project.blurb}
                github={project.github}
            />
        )
    })
    
    return(
        <ProjectList>
           {projectNodes}
        </ProjectList>
    )
}

const ProjectList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    list-style: none;
    padding: 0;

`

export default Projects