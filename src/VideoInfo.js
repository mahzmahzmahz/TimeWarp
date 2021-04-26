import styled from "styled-components"


function VideoInfo({selectVideo, embed}){

    return( 
    <Container>
        <h4>Title: {embed.song}</h4>
        <h5>Artist: {embed.artist}</h5>
        <h5>Year: {embed.year}</h5>
        <button onClick={selectVideo} >New Video</button>
    </Container>
    )
}

export default VideoInfo

const Container= styled.div` 
    border: 1px solid black;
    margin-right: 15%;
    margin-left: 15%;
    text-align: center;
`
