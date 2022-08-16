import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const ProjectList = () => {
    return (
        <List>
            <Item>
                <h2>trackside</h2>
                <h3>flask application</h3>
                <FontAwesomeIcon icon="fa-brands fa-github" />
                <p>Project Description</p>
            </Item>
        </List>
    )
}

const List = styled.ul`
    padding: 1rem;
    text-align: left;
    width: 50%;

`

const Item = styled.li`
    list-style: none;
    color: #fdf7fa;
    background-color: #ff5757;
`



export default ProjectList;