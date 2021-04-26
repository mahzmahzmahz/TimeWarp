import styled from "styled-components"
import './App.css';
import { useState } from "react"
import Header from "./Header"
import Video from "./Video"
import DatePicker from 'react-date-picker'
import VideoInfo from './VideoInfo'



function App() {
  const [embed, setEmbed] = useState(null)
  const [video, setVideo] = useState(false)
  const [date, setDate] = useState(new Date())
  const [dateForVid, setDateForVid] = useState(null)
  
  //This makes it impossible to set your birthday any time after 13 years ago.
  const hoop = new Date(new Date().setDate(new Date().getDate()-4748))


  const vids = [
    //1983
    {song: "Every Breath You Take", artist: "The Police", video: "OMOGaugKpzs", year: 1983},
    {song: "Flashdance... What A Feeling", artist: "Irene Cara", video: "miax0Jpe5mA", year: 1983},
    {song: "Maneater", artist: "Hall and Oates", video: "yRYFKcMa_Ek", year: 1983},
    {song: "Sweet Dreams (Are Made of This)", artist: "The Eurythmics", video: "qeMFqkcPYcg", year: 1983},
    {song: "Do You Really Want to Hurt Me", artist: "Culture Club", video: "2nXGPZaTKik", year: 1983},
    {song: "Come on Eileen", artist: "Dexy's Midnight Runners", video: "cVRB2HZ_R2U", year: 1983},
    {song: "You and I", artist: "Eddie Rabbitt and Crystal Gayle", video: "v0sxMMsDgtM", year: 1983},
    {song: "Hungry Like the Wolf", artist: "Duran Duran", video: "oJL-lCzEXgI", year: 1983},
    {song: "Let's Dance", artist: "David Bowie", video: "VbD_kBJc_gI", year: 1983},
    {song: "You Are", artist: "Lionel Richie", video: "2Ir0fratuG0", year: 1983},
    {song: "Sexual Healing", artist: "Marvin Gaye", video: "rjlSiASsUIs", year: 1983},
    {song: "Puttin On the Ritz", artist: "Taco", video: "4OUnedMCCW0", year: 1983},
    {song: "Little Red Corvette", artist: "Prince", video: "v0KpfrJE4zw", year: 1983},
    {song: "Every Breath You Take", artist: "Phil Collins (Original by The Supremes)", video: "C9IwBJYTwQ0", year: 1983},
    {song: "Der Kommissar", artist: "After The Fire", video: "vBfFDTPPlaM", year: 1983},
    {song: "Allentown", artist: "Billy Joel", video: "BHnJp0oyOxs", year: 1983},
    {song: "Always Something There to Remind Me", artist: "Naked Eyes", video: "lVrELhxOFnM", year: 1983},
    {song: "Too Shy", artist: "Kajagoogoo", video: "rkpG4XApJ28", year: 1983},
    {song: "Affair of the Heart", artist: "Rick Springfield", video: "-Fn3Ze8xVOE", year: 1983},

  //1984
      {song: "When Doves Cry", artist: "Prince", video: "UG3VcCAlUgE", year: 1984},
      {song: "What's Love GOt To Do With It", artist: "Tina Turner", video: "oGpFcHTxjZs", year: 1984},
      {song: "Against All Odds", artist: "Phil Collins", video: "SWSQS06i7-w", year: 1984},
      {song: "Say Say Say", artist: "Paul McCartney and Michael Jackson", video: "aLEhh_XpJ-0", year: 1984},
      {song: "Jump", artist: "Van Halen", video: "SwYN7mTi6HM", year: 1984},
      {song: "Footloose", artist: "Kenny Loggins", video: "ltrMfT4Qz5Y", year: 1984},
      {song: "Missing You", artist: "John Waite", video: "k9e157Ner90", year: 1984},
      {song: "Owner of a Lonely Heart", artist: "Yes", video: "SVOuYquXuuc", year: 1984},
      {song: "Cyndi Lauper", artist: "Time After Time", video: "VdQY7BusJNU", year: 1984},
      {song: "Joanna", artist: "Kool & The Gang", video: "hsklsxReSe0", year: 1984},
      {song: "Hold Me Now", artist: "Thompson Twins", video: "H9694K85Xc8", year: 1984},
      {song: "I Just Called To Say I Love You", artist: "Stevie Wonder", video: "NiRj5m63oig", year: 1984},
      {song: "Self Control", artist: "Laura Branigan", video: "RP0_8J7uxhs", year: 1984},
      {song: "Dancing In the Dark", artist: "Bruce Springsteen", video: "129kuDCQtHs", year: 1984},
      {song: "Oh Sherrie", artist: "Steve Perry", video: "5-WpsdC2-Cc", year: 1984},
      {song: "Borderline", artist: "Madonna", video: "rSaC-YbSDpo", year: 1984},
      {song: "I Guess That's Why They Call It The Blues", artist: "Elton John", video: "h6KYAVn8ons", year: 1984},
      {song: "Sunglasses At Night", artist: "Corey Hart", video: "X2LTL8KgKv8", year: 1984},
      {song: "Sister Christian", artist: "Night Ranger", video: "z92bmlcmyq0", year: 1984},

  //1985
      {song: "Careless Whisper", artist: "George Michael", video: "izGwDsrQ1eQ", year: 1985},
      {song: "Everybody Wants To Rule The World", artist: "Tears For Fears", video: "aGCdLKXNF3w", year: 1985},
      {song: "Money For Nothing", artist: "Dire Straits", video: "wTP2RUD_cL0", year: 1985},
      {song: "I Feel for You", artist: "Chaka Khan", video: "YW0sxgYAmLM", year: 1985},
      {song: "Take On Me", artist: "A-ha", video: "djV11Xbc914", year: 1985},
      {song: "Everytime You Go Away", artist: "Paul Young", video: "nfk6sCzRTbM", year: 1985},
      {song: "Can't Fight This Feeling", artist: "REO Speedwagon", video: "zpOULjyy-n8", year: 1985},
      {song: "The Power Of Love", artist: "Huey Lewis & The News", video: "wBl2QGAIx1s", year: 1985},
      {song: "The Heat Is On", artist: "Glenn Frey", video: "uZD8HKVKneI", year: 1985},
      {song: "Heaven", artist: "Bryan Adams", video: "s6TtwR2Dbjg", year: 1985},
      {song: "Everything She Wants", artist: "Wham!", video: "Yf_Lwe6p-Cg", year: 1985},
      {song: "Loverboy", artist: "Billy Ocean", video: "tyrowWnlNnQ", year: 1985},
      {song: "Cool It Now", artist: "New Edition", video: "RZUq6N7Gx1c", year: 1985},
      {song: "Sea of Love", artist: "The Honeydrippers", video: "2BoUzzFXuVU", year: 1985},
      {song: "Lovergirl", artist: "Teena Marie", video: "1fyWgjhe_Zg", year: 1985},
      {song: "Rhythm of the Night", artist: "Debarge", video: "cAQSZhazYk8", year: 1985},
      {song: "You're the Inspiration", artist: "Chicago", video: "CRfy1yorkec", year: 1985},
      {song: "We Belong", artist: "Pat Benetar", video: "qxZInIyOBXk", year: 1985},
      {song: "Freeway of Love", artist: "Aretha Franklin", video: "Ip_pjb5_fgA", year: 1985},
      {song: "Strut", artist: "Sheena Easton", video: "uSp0kO-NBWw", year: 1985},

  //1986
      {song: "That's What Friends Are For", artist: "Dionne Warwick", video: "HyTpu6BmE88", year: 1986},
      {song: "I Miss You ", artist: "Klymaxx", video: "gvlhHJNppQg", year: 1986},
      {song: "On My Own", artist: "Patti LaBelle ft. Michael McDonald", video: "KsH63qJlIMM", year: 1986},
      {song: "Broken Wings", artist: "Mr. Mister", video: "nKhN1t_7PEY", year: 1986},
      {song: "How Will I Know", artist: "Whitney Houston", video: "m3-hY-hlhBg", year: 1986},
      {song: "Party All the Time", artist: "Eddie Murphy", video: "iWa-6g-TbgI", year: 1986},
      {song: "Burning Heart", artist: "Survivor", video: "Kc71KZG87X4", year: 1986},
      {song: "Addicted to Love", artist: "Robert Palmer", video: "XcATvu5f9vE", year: 1986},
      {song: "Secret Lovers", artist: "Atlantic Starr", video: "Oe2UXqFo0DY", year: 1986},
      {song: "Friends & Lovers", artist: "Gloria Loring And Carl Anderson", video: "r3tTcl1DJw8", year: 1986},
      {song: "Pet Shop Boys", artist: "West End Girls", video: "p3j2NYZ8FKs", year: 1986},
      {song: "Alive And Kicking", artist: "Simple Minds", video: "ljIQo1OHkTI", year: 1986},
      {song: "Never", artist: "Heart", video: "zWzy5q_M5Ho", year: 1986},
      {song: "Higher Love", artist: "Steve Winwood", video: "k9olaIio3l8", year: 1986},
      {song: "Holding Back the Years", artist: "Simply Red", video: "yG07WSu7Q9w", year: 1986},
      {song: "Sledgehammer", artist: "Peter Gabriel", video: "OJWJE0x7T4Q", year: 1986},
      {song: "Sara", artist: "Starship", video: "32ScTb6_KHg", year: 1986},
      {song: "Take My Breath Away", artist: "Berlin", video: "Bx51eegLTY8", year: 1986},
      {song: "What Have You Done For Me Lately", artist: "Janet Jackson", video: "r9uizdKZAGE", year: 1986},

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
    setEmbed(theseVids[(Math.floor(Math.random() * 20))])
    
  }

  function selectVideo(){
    let theseVids = vids.filter((vid) => vid.year === dateForVid + 13 || vid.year === dateForVid + 14 || vid.year === dateForVid + 15)
    console.log(theseVids)
    setEmbed(theseVids[(Math.floor(Math.random() * 20))])
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
      {video ? <VideoInfo embed={embed} selectVideo = {selectVideo} /> : null}
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


