import { Container } from "./styled"
import perfil from "../../assets/images/perfil.webp"

const Header =()=>{
    return (
        <Container>
        <img alt="anderson" src={perfil}/>
        <p>Anderson Klaiton Borba da Silva</p>
        </Container>
    )
}

export default Header