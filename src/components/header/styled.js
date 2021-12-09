import styled from "styled-components";

export const Container = styled.div`
    margin: 50px;

    p{
        font-size: 30px;
    }
    img{
        border-radius: 50%;
        width: 130px;
    }
    @media(min-width:800px){
        display: flex;
        align-items: center;
        width: 800px;
        justify-content: space-evenly;
    }

`