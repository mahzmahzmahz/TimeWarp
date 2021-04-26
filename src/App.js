import styled from "styled-components"
import './App.css';
import { useState } from "react"
import Header from "./Header"
import Video from "./Video"
import DatePicker from 'react-date-picker'




function App() {
  const [embed, setEmbed] = useState(null)
  const [video, setVideo] = useState(false)
  const [date, setDate] = useState(new Date())
  const [dateForVid, setDateForVid] = useState(null)
  
  //This makes it impossible to set your birthday any time after 13 years ago.
  const hoop = new Date(new Date().setDate(new Date().getDate()-4748))


  const vids = [
    //2004
      {song: "Meant To Live", artist: "Switchfoot", video: "Ky_prSro9iw", year: 2004},
      {song: "My Band", artist: "D12", video: "Bd4XHnTDTqc", year: 2004}, 
      {song: "My Happy Ending", artist: "Avril Levigne", video: "s8QYxmpuyxg", year: 2004},
      {song: "Roses", artist: "OutKast", video: "gWju37TZfo0", year: 2004},
      {song: "On My Way Down", artist: "Ryan Cabrera", video: "RWwdh6FGL4M", year: 2004},
      {song: "Jagged Edge", artist: "Walked Outta Heaven", video: "CUJdiH5qZLQ", year: 2004},
      {song: "Why", artist: "Jadakiss ft. Anthony Hamilton", video: "0-cpL--0AQA", year: 2004},
      {song: "One Thing", artist: "Finger Eleven", video: "2FQO1fj1MJU", year: 2004},
      {song: "Redneck Woman", artist: "Gretchen Wilson", video: "82dDnv9zeLs", year: 2004},
      {song: "Toxic", artist: "Britney Spears", video: "LOZuxwVk7TU", year: 2004},
      {song: "Suga Suga", artist: "Baby Bash ft. Frankie J", video: "6rgStv12dwA", year: 2004},
      {song: "Milkshake", artist: "Kelis", video: "pGL2rytTraA", year: 2004},
      {song: "Heaven", artist: "Los Lonely Boys", video: "wvkzoqQ5Oak", year: 2004},
      {song: "The First is the Deepest", artist: "Sheryl Crow", video: "dK9eLe8EQps", year: 2004},
      {song: "You Don't Know My Name", artist: "Alicia Keys", video: "_ST6ZRbhGiA", year: 2004},
      {song: "Burn", artist: "Usher", video: "t5XNWFw5HVw", year: 2004},
      {song: "I Don't Wanna Know", artist: "Mario Winans", video: "KCHgxoXv4g4", year: 2004},
      {song: "The Reason", artist: "Hoobastank", video: "fV4DiAyExN0", year: 2004},
      {song: "Here Without You", artist: "3 Doors Down", video: "kPBzTxZQG5Q", year: 2004},
      {song: "With You", artist: "Jessica Simpson", video: "VWl7WjAtBME", year: 2004},
    
  ]


 

  function handleChangeDate(value){
    const fullDate = value.getFullYear()
    setDate(value)
    setDateForVid(fullDate)
    setVideo(true)
    
    let theseVids = vids.filter((vid) => vid.year === fullDate + 13 || vid.year === fullDate + 14 || vid.year === fullDate + 15)
    console.log(theseVids)
    setEmbed(theseVids[(Math.floor(Math.random() * 20))].video)
    
  }
  console.log(date)
  console.log(dateForVid)
  console.log(embed)
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



      </Container>
      {video ? <Video embed={embed}/> : null}
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


