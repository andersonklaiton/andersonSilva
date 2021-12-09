import styled from "styled-components";

export const Container = styled.div`
    margin: 50px;

p{
    font-size: 30px;
}
img{
    width: 100%;
}
@media(min-width:800px){
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 800px;
    justify-content: space-evenly;
}

`