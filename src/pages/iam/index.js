import front from "../../assets/images/frontend.png"
import { Container } from "./styles"


const Iam = ()=>{
    return(
    <Container>
    <p>Formado em Analise e Desenvolvimento de Sistemas em 2011 pela FAE,</p>
    <p>Estudante Full Stack em 2021 pela Kenzie Academy Brasil</p>
    <p>Formado em Front End em 2021 pela Kenzie Academy Brasil- HTML, CSS, Javascript, Typescript, React, API</p>
    <p>Em andamento Back End pela Kenzie Academy Brasil- Python, Flesk, Django</p>
    <p>Inglês intermediario curso realizado em 2012 pela TopWay</p>
    <img alt="" src={front}/>
    </Container>)
}
export default Iam