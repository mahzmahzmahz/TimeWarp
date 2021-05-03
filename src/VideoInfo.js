import styled from "styled-components"


function VideoInfo({selectVideo, embed}){

    return( 
    <Container>
        <h4>Title: {embed.song}</h4>
        <h5>Artist: {embed.artist}</h5>
        <h5>Year: {embed.year}</h5>
        <Button onClick={selectVideo} >New Video</Button>
    </Container>
    )
}

export default VideoInfo

const Container= styled.div` 
    border: 1px solid black;
    margin-right: 15%;
    margin-left: 15%;
    text-align: center;
    border-radius: 5rem;
    background-image: radial-gradient(
        circle at top left, 
        #e3f8fc, 
        #7ae9ff 75%
        );
`
const Button = styled.button`
    display:inline-block;
    padding:0.35em 1.2em;
    border:0.1em solid #FF6EC7;
    background-color:#C7FF6E;
    margin:0 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FF6EC7;
    text-align:center;
    transition: all 0.2s;

    &:hover{
         color:#C7FF6E;
         background-color:#FF6EC7;
        }
`
