import { Container, DivImg } from "./styles"

const CardsProjects = ({projeto, descrição, imagem, link, github})=>{
    return(
    <Container>
        <div><p>{projeto}</p></div>
        <div><p>{descrição}</p></div>
        <DivImg>
            <a href={link} target="_blank" rel="noopener noreferrer"><img className="img_img" alt="" src={imagem}/></a>
            <a href={github} target="_blank" rel="noopener noreferrer"><p>Clique para abrir no GitHub</p></a>
        </DivImg>
    </Container>
    )
}
export default CardsProjects