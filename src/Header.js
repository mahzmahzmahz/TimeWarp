import React from "react"
import styled from "styled-components"
import headerImg from './headerImg.png'

function Header(){
    return(
        <div>
            <Container>
                <Title className="flex-item">TimeWarp</Title>
            </Container>
        </div>
    )
}

export default Header;

const Container = styled.section`
    background-image: url(${headerImg});
    display: flex;
    flex-wrap: flex;
    min-height: 5vh;
    justify-content: center;
    

    .flex-item{
        margin: 1rem;
    }

`

const Title = styled.h1` 
    margin: 0;
    color:  #a1ff6b;
    font-size: xx-large;
    -webkit-text-stroke: .5px black;
    text-shadow: 2px 0px 10px #e9ff6b;
`
