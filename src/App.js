import styled from "styled-components"
import './App.css';
import { useState } from "react"
import Header from "./Header"
import Video from "./Video"
import DatePicker from 'react-date-picker'




function App() {
  const [video, setVideo] = useState(false)
  const [date, setDate] = useState(new Date())
  
  //This makes it impossible to set your birthday any time after 13 years ago.
  const hoop = new Date(new Date().setDate(new Date().getDate()-4748))


  function handleChangeDate(value){
    setDate(value)
    
  }
  console.log(date)

  return (
    <div>

      <Header/>
        <Container>

          <DatePicker
            onChange={handleChangeDate}
            value={date}
            minDate={new Date("01-01-1970")}
            maxDate={new Date(hoop)}
          />

          {video ? <Video/> : null}

      </Container>

    </div>
  );
}


export default App;

const Container = styled.section`
    padding:10%;
    display: flex;
    flex-wrap: flex;
    justify-content: center;
  `