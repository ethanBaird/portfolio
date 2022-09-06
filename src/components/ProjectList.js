import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const ProjectList = () => {
    return (
        <List>
            <Item>
                <h2>trackside</h2>
                <h3>flask application</h3>
                <p>Project Description</p>
            </Item>
        </List>
    )
}

const List = styled.ul`
    width: 50%;
    text-align: left;
    padding: 0;

`

const Item = styled.li`
    color: #e0e0e2;

border-radius: 5px;
box-shadow: 0 0 8px #ffb100;

list-style: none;

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



export default ProjectList;