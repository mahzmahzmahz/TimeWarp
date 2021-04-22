import styled from "styled-components"
import './App.css';
import { useState, useCallback, Component } from "react"
import Header from "./Header"
import Video from "./Video"



function App() {
  const [video, setVideo] = useState(false)
  

  

  return (
    <div>
      <Header/>
      
      {video ? <Video/> : null}
    </div>
  );
}


export default App;
