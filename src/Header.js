import React from "react"
import styled from "styled-components"


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
    background: rgb(97, 58, 156);
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
`
