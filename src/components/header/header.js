import { Container } from "./styled"
import perfil from "../../assets/images/perfil.webp"

const Header =()=>{
    return (
        <Container>
        <a alt="" href="/"><img alt="anderson" src={perfil}/></a>
        <p><a alt="" href="/iam">Anderson Klaiton Borba da Silva</a></p>
        </Container>
    )
}

export default Header