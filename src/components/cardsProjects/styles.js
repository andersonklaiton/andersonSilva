import styled from "styled-components";

export const Container = styled.div`
    background-color: #686869;
    width: 80%;
    
    @media(min-width:800px){
        display: flex;
        align-items: center;
        width: 800px;
        justify-content: space-evenly;
        flex-direction: column;
    }
    img{
        width: 100%;
       
    }
`
export const DivImg = styled.div`
 p{font-size:15px}
`
