import styled from "styled-components"
import "./App";
import YoutubeEmbed from "./YoutubeEmbed";



function Video({embed}){



    return(
        <div>
        <VideoContainer>
            <YoutubeEmbed allow="autoplay" embedId={embed.video} />
        </VideoContainer>
        </div>
    )
}

export default Video;

const VideoContainer = styled.div`
margin: 6%;
border: .4rem ridge #693b87;
`
