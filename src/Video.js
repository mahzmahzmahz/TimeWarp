import styled from "styled-components"
import "./App";
import YoutubeEmbed from "./YoutubeEmbed";

function Video({embed}){
    return(
        <div>
            <YoutubeEmbed className="autoplay" embedId={embed} />
            {/* </div><iframe width='560' height="315" src=`https://www.youtube.com/embed/${embed}I?autoplay=1` frameborder='0' allowfullscreen></iframe> */}
        </div>
    )
}

export default Video;

