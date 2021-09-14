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
      {song: "Billie Jean", artist: "Michael Jackson", video: "Zi_XLOBDo_Y", year: 1983},

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
        {song: "Legs", artist: "ZZ Top", video: "eUDcTLaWJuo", year: 1984},

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
        {song: "The Boys of Summer", artist: "Don Henley", video: "bReQyJbFSKQ", year: 1985},

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
        {song: "What Have You Done For Me Lately", artist: "Janet Jackson", video: "4B_UYYPb-Gk", year: 1986},
        {song: "Walk This Way", artist: "Run-D.M.C.", video: "r9uizdKZAGE", year: 1986},

    //1987
        {song: "Walk Like an Egyptian", artist: "Bangles", video: "Cv6tuzHUuuk", year: 1987},
        {song: "Shake You Down", artist: "Gregory Abbot", video: "Uc8wmLul3uw", year: 1987},
        {song: "C'est La Vie", artist: "Robbie Nevil", video: "CGtf9QfITQw", year: 1987},
        {song: "Here I Go Again", artist: "Whitesnake", video: "WyF8RHM1OCg", year: 1987},
        {song: "Livin' On a Prayer", artist: "Bon Jovi", video: "lDK9QqIzhwk", year: 1987},
        {song: "At This Moment", artist: "Billy Vera and The Beaters", video: "O2ur063fMhs", year: 1987},
        {song: "Land of Confusion", artist: "Genesis", video: "Yq7FKO5DlV0", year: 1987},
        {song: "Little Lies", artist: "Fleetwood Mac", video: "uCGD9dT12C0", year: 1987},
        {song: "Just to See Her", artist: "Smokey Robinson", video: "g5bvjUrVObk", year: 1987},
        {song: "(You Gotta) Fight for Your Right (To Party)", artist: "Beastie Boys", video: "eBShN8qT4lk", year: 1987},
        {song: "With or Without You", artist: "U2", video: "ujNeHIo7oTE", year: 1987},
        {song: "Always ", artist: "Atlantic Starr", video: "e8pVcq_lYNw", year: 1987},
        {song: "Don't Dream It's Over", artist: "Crowded House", video: "J9gKyRmic20", year: 1987},
        {song: "Head to Toe", artist: "BerliLisa Lisa and Cult Jamn", video: "51Iq8JmmfxY", year: 1987},
        {song: "I Think We're Alone Now", artist: "Tiffany", video: "w6Q3mHyzn78", year: 1987},
        {song: "Only In My Dreams", artist: "Debbie Gibson", video: "4T1t5OFOYDU", year: 1987},
        {song: "Lean On Me", artist: "Club Nouveau", video: "kbyjaUJWWmk", year: 1987},
        {song: "Heart and Soul", artist: "T'pau", video: "SwrYMWoqg5w", year: 1987},
        {song: "Keep Your Hands to Yourself", artist: "The Georgia Satellites", video: "PdpAop7gp0w", year: 1987},
        {song: "Touch Me (I Want Your Body)", artist: "Samantha Fox", video: "W1btg3mpEOc", year: 1987},

        //1988
        {song: "Faith", artist: "George Michae", video: "6Cs3Pvmmv0E", year: 1988},
        {song: "Need You Tonight", artist: "INXS", video: "F93ywiGMDnQ", year: 1988},
        {song: "Sweet Child O' Mine", artist: "Guns N' Roses", video: "1w7OgIMMRc4", year: 1988},
        {song: "Heaven is a Place on Earth", artist: "Belinda Carlisle", video: "NOGEyBeoBGM", year: 1988},
        {song: "The Flame", artist: "Cheap Trick", video: "muhFxXce6nA", year: 1988},
        {song: "Pour Some Sugar On Me", artist: "Def Leppard", video: "0UIB9Y4OFPs", year: 1988},
        {song: "Simply Irresistible", artist: "Robert Palmer", video: "UrGw_cOgwa8", year: 1988},
        {song: "Endless Summer Nights", artist: "Richard Marx", video: "1NvsMKYgCsM", year: 1988},
        {song: "Red, Red Wine", artist: "UB40", video: "zXt56MB-3vc", year: 1988},
        {song: "The Loco-Motion", artist: "Kylie Minogue", video: "POWsFzSFLCE", year: 1988},
        {song: "Make It Real", artist: "Jets", video: "K8LLF-46FN8", year: 1988},
        {song: "I Want To Be Your Man", artist: "Roger", video: "c1xf_RWhwso", year: 1988},
        {song: "1-2-3", artist: "Gloria Estefan and Miami Sound Machine", video: "T4IWlFutwXo", year: 1988},
        {song: "One Good Woman", artist: "Peter Cetera", video: "ok2Jyjtm698", year: 1988},
        {song: "Pink Cadillac", artist: "Natalie Cole", video: "WCRumaMqgZU", year: 1988},
        {song: "Fast Car", artist: "Tracy Chapman", video: "yvGfVdx-gNo", year: 1988},
        {song: "Don't Be Cruel", artist: "Bobby Brown", video: "pd7dCbEfTs4", year: 1988},
        {song: "Cherry Bomb", artist: "John Cougar Mellancamp", video: "KF0gsbQKhD8", year: 1988},
        {song: "Nothin' But a Good Time", artist: "Poison", video: "_88L-CU7PD4", year: 1988},
        {song: "Angel", artist: "Aerosmith", video: "CBTOGVb_cQg", year: 1988},

        //1989
        {song: "Straight Up", artist: "Paula Abdul", video: "El1kgCqD7Xk", year: 1989},
        {song: "Wind Beneath My Wings", artist: "Bette Midler", video: "0iAzMRKFX3c", year: 1989},
        {song: "Girl You Know It's True", artist: "Milli Vanilli", video: "RdSmokR0Enk", year: 1989},
        {song: "Baby I Love Your Way", artist: "Will to Power", video: "79r_XaUU7yE", year: 1989},
        {song: "Right Here Waiting", artist: "Richard Marx", video: "S_E2EHVxNAE", year: 1989},
        {song: "Waiting for a Star to Fall", artist: "Boy Meets Girl", video: "RhxF9Qg5mOU", year: 1989},
        {song: "Heaven", artist: "Warrant", video: "rrSdXtFJG20", year: 1989},
        {song: "The Look", artist: "Roxette", video: "LlVI7ZNiFlI", year: 1989},
        {song: "She Drives Me Crazy", artist: "Fine Young Cannibals", video: "UtvmTu4zAMg", year: 1989},
        {song: "If You Don't Know Me By Now", artist: "Simply Red", video: "zTcu7MCtuTs", year: 1989},
        {song: "I'll Be Loving You (Forever)", artist: "New Kids On The Block", video: "ZT_7UjCVELg", year: 1989},
        {song: "If I Could Turn Back Time", artist: "Cher", video: "taM7k2QhJe8", year: 1989},
        {song: "Bust a Move", artist: "Young M.C.", video: "tZQQGX24Teg", year: 1989},
        {song: "Once Bitten Twice Shy", artist: "Great White", video: "Bz61YQWZuYU", year: 1989},
        {song: "My Heart Can't Tell You No", artist: "Rod Stewart", video: "NtNKowPiB2w", year: 1989},
        {song: "I Like It", artist: "Dino", video: "6c5iLo1oKQA", year: 1989},
        {song: "When the Children Cry", artist: "White Lion", video: "95KRd1PYRkA", year: 1989},
        {song: "Funky Cold Medina", artist: "Tone Loc", video: "63ZIf2H9S0E", year: 1989},
        {song: "Walk On Water", artist: "Eddie Money", video: "7FdYRq8-6kM", year: 1989},
        {song: "Poison", artist: "Alice Cooper", video: "Qq4j1LtCdww", year: 1989},
      //1990
      {song: "Hold On", artist: "Wilson Phillips", video: "uIbXvaE39wM", year: 1990},
      {song: "Poison", artist: "Bell Biv DeVoe", video: "RcbMW2-Goog", year: 1990},
      {song: "Vision Of Love", artist: "Mariah Carey", video: "tov22NtCMC4", year: 1990},
      {song: "Close to You", artist: "Maxi Priest", video: "mlFK2MpKnJU", year: 1990},
      {song: "All Around the World", artist: "Lisa Stansfield", video: "JVuuatjHGnY", year: 1990},
      {song: "The Power", artist: "Snap!", video: "j1BNcSBApOU", year: 1990},
      {song: "Downtown Train", artist: "Rod Stewart", video: "7vPrtOFKPWY", year: 1990},
      {song: "Back To Life (However Do You Want Me)", artist: "Soul II Soul", video: "TB54dZkzZOY", year: 1990},
      {song: "Ice Ice Baby", artist: "Vanilla Ice", video: "rog8ou-ZepE", year: 1990},
      {song: "U Can't Touch This", artist: "M.C. Hammer", video: "q8WSdypJ4WA", year: 1990},
      {song: "Janie's Got a Gun", artist: "Aerosmith", video: "RqQn2ADZE1A", year: 1990},
      {song: "The Humpty Dance", artist: "Digital Underground", video: "PBsjggc5jHM", year: 1990},
      {song: "Free Fallin'", artist: "Tom Petty", video: "1lWJXDG2i0A", year: 1990},
      {song: "Enjoy The Silence", artist: "Depeche Mode", video: "aGSKrC7dGcY", year: 1990},
      {song: "Love Shack", artist: "The B-52's", video: "9SOryJvTAGs", year: 1990},
      {song: "Make You Sweat", artist: "Keith Sweat", video: "dV0ea3IEo9o", year: 1990},
      {song: "Just a Friend", artist: "Biz Markie", video: "9aofoBrFNdg", year: 1990},
      {song: "Two to Make It Right", artist: "Seduction", video: "zr7EJa6qR_A", year: 1990},
      {song: "Vogue", artist: "Madonna", video: "GuJQSAiODqI", year: 1990},
      {song: "Hold On", artist: "En Vogue", video: "pj9ap3-HVzE", year: 1990},


      //1991
      {song: "(Everything I Do) I Do It For You", artist: "Bryan Adams", video: "Y0pdQU87dc8", year: 1991},
      {song: "I Wanna Sex You Up", artist: "Color Me Badd", video: "Oxu3pq319r0", year: 1991},
      {song: "More Than Words", artist: "Extreme", video: "UrIiLvg58SY", year: 1991},
      {song: "Baby, Baby", artist: "Amy Grant", video: "vMXuuYnoRdI", year: 1991},
      {song: "Motownphilly", artist: "Boyz II Men", video: "Rciee-oQLoI", year: 1991},
      {song: "Good Vibrations", artist: "Marky Mark and The Funky Bunch Featuring Loleatta Holloway", video: "Zjk4CCVxWZM", year: 1991},
      {song: "I Like the Way (The Kissing Game)", artist: "Hi-Five", video: "vF3MB0U6DO8", year: 1991},
      {song: "I Adore Mi Amor", artist: "Color Me Badd", video: "92NdfSeOLA0", year: 1991},
      {song: "Losing My Religion", artist: "R.E.M.", video: "xwtdhWltSIg", year: 1991},
      {song: "Summertime", artist: "D.J. Jazzy Jeff and The Fresh Prince", video: "Kr0tTbTbmVA", year: 1991},
      {song: "One More Try", artist: "Timmy T", video: "hcEaUJoo0NE", year: 1991},
      {song: "Gonna Make You Sweat (Everybody Dance Now)", artist: "C+C Music Factory", video: "LaTGrV58wec", year: 1991},
      {song: "Unbelievable", artist: "EMF", video: "sfCLt0kTd5E", year: 1991},
      {song: "Touch Me (All Night Long)", artist: "Cathy Dennis", video: "5xiwxfxVUZA", year: 1991},
      {song: "It Ain't Over Til It's Over", artist: "Lenny Kravitz", video: "TmENMZFUU_0", year: 1991},
      {song: "I Touch Myself", artist: "Divinyls", video: "34w8kGPM", year: 1991},
      {song: "Something to Talk About", artist: "Bonnie Raitt", video: "mJ58TVYNFro", year: 1991},
      {song: "I'll Be There", artist: "Escape Club", video: "RJwraza8Z5s", year: 1991},
      {song: "I Saw Red", artist: "Warrant", video: "3dh79Ggx9Js", year: 1991},
      {song: "From a Distance", artist: "Bette Midler", video: "lN4AcFzxtdE", year: 1991},

      //1992
      {song: "Baby Got Back", artist: "Sir Mix A-Lot", video: "X53ZSxkQ3Ho", year: 1992},
      {song: "Jump", artist: "Kris Kross", video: "010KyIQjkTk", year: 1992},
      {song: "Baby-Baby-Baby", artist: "TLC", video: "Q2H6pTtEVlo", year: 1992},
      {song: "Tears In Heaven", artist: "Eric Clapton", video: "JxPj3GAYYZ0", year: 1992},
      {song: "Under the Bridge", artist: "Red Hot Chili Peppers", video: "GLvohMXgcBo", year: 1992},
      {song: "I'm Too Sexy", artist: "Right Said Fred", video: "P5mtclwloEQ", year: 1992},
      {song: "Achy Breaky Heart", artist: "Billy Ray Cyrus", video: "byQIPdHMpjc", year: 1992},
      {song: "Life Is a Highway", artist: "Tom Cochrane", video: "U3sMjm9Eloo", year: 1992},
      {song: "Finally", artist: "CeCe Peniston", video: "xk8mm1Qmt-Y", year: 1992},
      {song: "Come & Talk to Me", artist: "Jodeci", video: "wAImDL6LF_Q", year: 1992},
      {song: "Smells Like Teen Spirit", artist: "Nirvana", video: "hTWKbfoikeg", year: 1992},
      {song: "Bohemian Rhapsody", artist: "Queen", video: "fJ9rUzIMcZQ", year: 1992},
      {song: "Please Don't Go", artist: "K.W.S.", video: "glWQc8tgYQA", year: 1992},
      {song: "All I Want", artist: "Toad The Wet Sprocket", video: "AVYYpNaSs2Y", year: 1992},
      {song: "Mysterious Ways", artist: "U2", video: "TxcDTUMLQJI", year: 1992},
      {song: "Friday I'm In Love", artist: "The Cure", video: "ucX9hVCQT_U", year: 1992},
      {song: "Real Love", artist: "Mary J. Blige", video: "90c9pEtZquw", year: 1992},
      {song: "Free Your Mind", artist: "En Vogue", video: "i7iQbBbMAFE", year: 1992},
      {song: "Jump Around", artist: "House Of Pain", video: "XhzpxjuwZy0", year: 1992},
      {song: "If You Asked Me To", artist: "Celine Dion", video: "1bKuXbnGDqI", year: 1992},

      //1993
      {song: "I Will Always Love You", artist: "Whitney Houston", video: "3JWTaaS7LdU", year: 1993},
      {song: "Whoomp! (There It Is)", artist: "Tag Team", video: "ffCEr327W44", year: 1993},
      {song: "That's the Way Love Goes", artist: "Janet Jackson", video: "2b_KfAGiglc", year: 1993},
      {song: "Nuthin' But A 'G' Thang", artist: "Dr. Dre", video: "0F0CAEoF4XM", year: 1993},
      {song: "Don't Walk Away ", artist: "Jade", video: "wZ9HG0nGe-g", year: 1993},
      {song: "Show Me Love", artist: "Robin S.", video: "Ps2Jc28tQrw", year: 1993},
      {song: "I'm Gonna Be (500 Miles)", artist: "The Proclaimers", video: "tbNlMtqrYS0", year: 1993},
      {song: "Ordinary World", artist: "Duran Duran", video: "FqIACCH20JU", year: 1993},
      {song: "I'd Do Anything for Love (But I Won't Do That)", artist: "Meat Loaf", video: "9X_ViIPA-Gc", year: 1993},
      {song: "Slam", artist: "Onyx", video: "7ADgCeYJMN4", year: 1993},
      {song: "What's Up?", artist: "4 Non Blondes", video: "6NXnxTNIWkc", year: 1993},
      {song: "I Get Around", artist: "2Pac", video: "YqJAnQTwmJs", year: 1993},
      {song: "Insane In the Brain", artist: "Cypress Hill", video: "RijB8wnJCN0", year: 1993},
      {song: "Sweat (A La La La La Long)", artist: "Inner Circle", video: "uc2UEfWjvo8", year: 1993},
      {song: "It Was a Good Day", artist: "Ice Cube", video: "h4UqMyldS7Q", year: 1993},
      {song: "What Is Love", artist: "Haddaway", video: "HEXWRTEbj1I", year: 1993},
      {song: "Fields of Gold", artist: "Sting", video: "KLVq0IAzh1A", year: 1993},
      {song: "Hey Jealousy", artist: "Gin Blossoms", video: "ah5gAkna3jI", year: 1993},
      {song: "All That She Wants", artist: "Ace Of Base", video: "d73tiBBzvFM", year: 1993},
      {song: "Weak", artist: "SWV", video: "976b8TPPFJU", year: 1993},


      //1994
      {song: "The Sign", artist: "Ace Of Base", video: "iqu132vTl5Y", year: 1994},
      {song: "I Swear", artist: "All-4-One", video: "25rL-ooWICU", year: 1994},
      {song: "I'll Make Love to You", artist: "Boyz II Men", video: "fV8vB1BB2qc", year: 1994},
      {song: "All for Love", artist: "Bryan Adams, Rod Stewart and Sting", video: "ofA3URC1wyk", year: 1994},
      {song: "En Vogue (with Salt-N-Pepa)", artist: "Whatta Man", video: "hEmH1EgJbEs", year: 1994},
      {song: "Regulate", artist: "Warren G and Nate Dogg", video: "1plPyJdXKIY", year: 1994},
      {song: "Back & Forth", artist: "Aaliyah", video: "W8kZmWegXRc", year: 1994},
      {song: "Shine", artist: "Collective Soul", video: "_m0bI82Rz_k", year: 1994},
      {song: "All I Wanna Do", artist: "Sheryl Crow", video: "hgmBaE1cqD4", year: 1994},
      {song: "Mmm Mmm Mmm Mmm", artist: "Crash Test Dummies", video: "eTeg1txDv8w", year: 1994},
      {song: "Come to My Window", artist: "Melissa Etheridge", video: "Y1QIuAJoS94", year: 1994},
      {song: "Linger", artist: "Cranberries", video: "G6Kspj3OO0s", year: 1994},
      {song: "Found Out About You", artist: "Gin Blossoms", video: "1qB6XdAkkAo", year: 1994},
      {song: "Gin & Juice", artist: "Snoop Doggy Dogg", video: "DI3yXg-sX5c", year: 1994},
      {song: "I'll Stand By You", artist: "The Pretenders", video: "bLpmj059JFA", year: 1994},
      {song: "Don't Take the Girl", artist: "Tim McGraw", video: "-vn6QdqxK3g", year: 1994},
      {song: "I'll Take You There", artist: "General Public", video: "m0N_Q0JqH80", year: 1994},
      {song: "Stay (I Missed You)", artist: "Lisa Loeb and Nine Stories", video: "i9HGwRbMiVY", year: 1994},
      {song: "Breathe Again", artist: "Toni Braxton", video: "pRFEz2MjZgg", year: 1994},
      {song: "Hero", artist: "Mariah Carey", video: "hgXw9YHpk1M", year: 1994},


      //1995
      {song: "Gangsta's Paradise", artist: "Coolio", video: "fPO76Jlnz6c", year: 1995},
      {song: "Waterfalls", artist: "TLC", video: "8WEtxJ4-sh4", year: 1995},
      {song: "Kiss from a Rose", artist: "Seal", video: "AMD2TwRvuoU", year: 1995},
      {song: "Another Night", artist: "Real McCoy", video: "Pav2f4b-1ZE", year: 1995},
      {song: "This Is How We Do It", artist: "Montell Jordan", video: "0hiUuL5uTKc", year: 1995},
      {song: "Have You Ever Really Loved a Woman?", artist: "Bryan Adams", video: "hq2KgzKETBw", year: 1995},
      {song: "Boombastic / In the Summertime", artist: "Shaggy", video: "nW_MJRscgHE", year: 1995},
      {song: "Hold My Hand", artist: "Hootie and The Blowfish", video: "xoW3bqnr7tw", year: 1995},
      {song: "Colors of the Wind", artist: "Vanessa Williams", video: "IsVqO83OYow", year: 1995},
      {song: "I Got 5 on It", artist: "Luniz", video: "HSC9cgvtkRs", year: 1995},
      {song: "As I Lay Me Down", artist: "Sophie B. Hawkins", video: "gq-4vIIJO30", year: 1995},
      {song: "Before I Let You Go", artist: "Blackstreet", video: "kC6TnBx0HIU", year: 1995},
      {song: "Dear Mama / Old School", artist: "2Pac", video: "Mb1ZvUDvLDY", year: 1995},
      {song: "Roll to Me", artist: "Del Amitri", video: "K_s44LilaYM", year: 1995},
      {song: "Can't You See", artist: "Total [feat. The Notorious B.I.G.]", video: "DCMib3DBz60", year: 1995},
      {song: "Brokenhearted", artist: "Brandy", video: "wJlNPk_YVHA", year: 1995},
      {song: "Good", artist: "Better Than Ezra", video: "Zhs0JD6XJyQ", year: 1995},
      {song: "Run-Around", artist: "Blues Traveler", video: "ousaiByU1ko", year: 1995},
      {song: "Here Comes the Hotstepper", artist: "Ini Kamoze", video: "w0N4twV28Mw", year: 1995},
      {song: "Let Her Cry", artist: "Hootie and The Blowfish", video: "1aVHLL5egRY", year: 1995},

      //1996
      {song: "Macarena (Bayside Boys Remix)", artist: "Los Del Rio", video: "zWaymcVmJ-A", year: 1996},
      {song: "Because You Loved Me", artist: "Celine Dion", video: "O3XGynvy_V4", year: 1996},
      {song: "Always Be My Baby", artist: "Mariah Carey", video: "LfRNRymrv9k", year: 1996},
      {song: "Nobody Knows", artist: "The Tony Rich Project", video: "W7EyUY3-Wrg", year: 1996},
      {song: "Tha Crossroads", artist: "Bone Thugs-N-Harmony", video: "VMYAEHE2GrM", year: 1996},
      {song: "Ironic", artist: "Alanis Morissette", video: "Jne9t8sHpUc", year: 1996},
      {song: "How Do U Want It/California Love", artist: "2Pac", video: "mwgZalAFNhM", year: 1996},
      {song: "Name", artist: "The Goo Goo Dolls", video: "yQOBUrRaPU0", year: 1996},
      {song: "Not Gon' Cry", artist: "Mary J. Blige", video: "Xxk4e59M8og", year: 1996},
      {song: "Breakfast at Tiffany's", artist: "Deep Blue Something", video: "1ClCpfeIELw", year: 1996},
      {song: "No Diggity", artist: "BLACKstreet (featuring Dr. Dre)", video: "3KL9mRus19o", year: 1996},
      {song: "1979", artist: "The Smashing Pumpkins", video: "4aeETEoNfOg", year: 1996},
      {song: "Elevators (Me & You)", artist: "Outkast", video: "uqB_UVlhlPA", year: 1996},
      {song: "Pony", artist: "Ginuwine", video: "lbnoG2dsUk0", year: 1996},
      {song: "If It Makes You Happy", artist: "Sheryl Crow", video: "dyihQtBes1I", year: 1996},
      {song: "Until It Sleeps", artist: "Metallica", video: "eRV9uPr4Dz4", year: 1996},
      {song: "Give Me One Reason", artist: "Tracy Chapman", video: "V6hQ9HSKlIE", year: 1996},
      {song: "Missing", artist: "Everything But The Girl", video: "U56Ns66Qrb8", year: 1996},
      {song: "Hey Lover", artist: "LL Cool J", video: "Um99r6sgspY", year: 1996},
      {song: "Who Will Save Your Soul", artist: "Jewel", video: "0wBDDAZkNtk", year: 1996},

      //1997
      {song: "Candle In the Wind", artist: "Elton John", video: "NoOhnrjdYOc", year: 1997},
      {song: "Foolish Games/You Were Meant For Me", artist: "Jewel", video: "UNoouLa7uxA", year: 1997},
      {song: "I'll Be Missing You", artist: "Puff Daddy and Faith Evans", video: "NKMtZm2YuBE", year: 1997},
      {song: "I Believe I Can Fly", artist: "R. Kelly", video: "GIQn8pab8Vc", year: 1997},
      {song: "Return of the Mack", artist: "Mark Morrison", video: "uB1D9wWxd2w", year: 1997},
      {song: "How Do I Live", artist: "LeAnn Rimes", video: "MUFasKZcH_c", year: 1997},
      {song: "Wannabe", artist: "Spice Girls", video: "gJLIiF15wjQ", year: 1997},
      {song: "Quit Playing Games (With My Heart)", artist: "Backstreet Boys", video: "Ug88HO2mg44", year: 1997},
      {song: "Semi-Charmed Life", artist: "Third Eye Blind", video: "beINamVRGy4", year: 1997},
      {song: "Barely Breathing", artist: "Duncan Sheik", video: "A-oh-tP6RvA", year: 1997},
      {song: "Hypnotize", artist: "The Notorious B.I.G.", video: "glEiPXAYE-U", year: 1997},
      {song: "Do You Know (What It Takes)", artist: "Robyn", video: "z4n6ymEMQmk", year: 1997},
      {song: "Ooh Aah Just a Little Bit", artist: "Gina G", video: "KiLw45oAuD0", year: 1997},
      {song: "Invisible Man", artist: "98 Degrees", video: "WKgQPVoN088", year: 1997},
      {song: "Big Daddy", artist: "Heavy D", video: "S6sGofCFmKg", year: 1997},
      {song: "Fly Like an Eagle", artist: "Seal", video: "cyT1E_CROLo", year: 1997},
      {song: "MMMBop", artist: "Hanson", video: "NHozn0YXAeE", year: 1997},
      {song: "Bitch", artist: "Meredith Brooks", video: "_ivt_N2Zcts", year: 1997},
      {song: "2 Become 1", artist: "Spice Girls", video: "FA5jsa1lR9c", year: 1997},
      {song: "All for You", artist: "Sister Hazel", video: "f46ulX6uwGc", year: 1997},

      //1998
      {song: "Too Close", artist: "Next", video: "kwEZRPkAAu8", year: 1998},
      {song: "The Boy Is Mine", artist: "Brandy and Monica", video: "kwEZRPkAAu8", year: 1998},
      {song: "You're Still the One", artist: "Shania Twain", video: "KNZH-emehxA", year: 1998},
      {song: "All My Life", artist: "K-Ci and JoJo", video: "DXvMT_mVbqw", year: 1998},
      {song: "Gettin' Jiggy Wit It", artist: "Will Smith", video: "3JcmQONgXJM", year: 1998},
      {song: "The First Night", artist: "Monica", video: "ImynIRpbQLE", year: 1998},
      {song: "Adia", artist: "Sarah McLachlan", video: "Q5wW8N4pt3U", year: 1998},
      {song: "Crush", artist: "Jennifer Paige", video: "EIhSnaqou0I", year: 1998},
      {song: "Everybody (Backstreet's Back)", artist: "Backstreet Boys", video: "6M6samPEMpM", year: 1998},
      {song: "Body Bumpin' (Yippie-Yi-Yo)", artist: "Public Announcement", video: "gHCnHFcVZzU", year: 1998},
      {song: "Sex and Candy", artist: "Marcy Playground", video: "-KT-r2vHeMM", year: 1998},
      {song: "Gone Till November", artist: "Wyclef Jean", video: "kI6MWZrl8v8", year: 1998},
      {song: "Tubthumping", artist: "Chumbawamba", video: "2H5uWRjFsGc", year: 1998},
      {song: "I Want You Back", artist: "'N Sync", video: "is6gtilerPk", year: 1998},
      {song: "One Week", artist: "Barenaked Ladies", video: "fC_q9KPczAg", year: 1998},
      {song: "Daydreamin'", artist: "Tatyana Ali, Lord Tariq & Peter Gunz", video: "NMoeN1XFkNo", year: 1998},
      {song: "Cruel Summer", artist: "Ace Of Base", video: "sUt0ut92vek", year: 1998},
      {song: "How Deep Is Your Love", artist: "Dru Hill featuring Redman", video: "43XWafBLJIM", year: 1998},
      {song: "Turn It Up (Remix) / Fire It Up", artist: "Busta Rhymes", video: "3lXGbR58bcc", year: 1998},
      {song: "I'll Be", artist: "Edwin McCain", video: "5qrTmNDZ-nc", year: 1998},

      //1999
      {song: "No Scrubs", artist: "TLC", video: "FrLequ6dUdM", year: 1999},
      {song: "Angel of Mine", artist: "Monica", video: "3eOuK-pYhy4", year: 1999},
      {song: "Believe", artist: "Cher", video: "nZXRV4MezEw", year: 1999},
      {song: "...Baby One More Time", artist: "Britney Spears", video: "C-u5WLJ9Yk4", year: 1999},
      {song: "Kiss Me", artist: "Sixpence None The Richer", video: "hII0JXUJNDo", year: 1999},
      {song: "Genie In a Bottle", artist: "Christina Aguilera", video: "kIDWgqDBNXA", year: 1999},
      {song: "Every Morning", artist: "Sugar Ray", video: "3cqU1pFRqYE", year: 1999},
      {song: "Livin' la Vida Loca", artist: "Ricky Martin", video: "p47fEXGabaY", year: 1999},
      {song: "Where My Girls At?", artist: "702", video: "3lO5eGEnyRA", year: 1999},
      {song: "All Star", artist: "Smash Mouth", video: "L_jWHffIx5E", year: 1999},
      {song: "Smooth", artist: "Santana featuring Rob Thomas", video: "6Whgn_iE5uc", year: 1999},
      {song: "Bills, Bills, Bills", artist: "Destiny's Child", video: "NiF6-0UTqtc", year: 1999},
      {song: "Save Tonight", artist: "Eagle-Eye Cherry", video: "Nntd2fgMUYw", year: 1999},
      {song: "Bailamos", artist: "Enrique Iglesias", video: "5sye_VxmNZA", year: 1999},
      {song: "Fly Away", artist: "Lenny Kravitz", video: "EvuL5jyCHOw", year: 1999},
      {song: "Back at One", artist: "Brian McKnight", video: "rXPfovXw2tw", year: 1999},
      {song: "Can I Get A...", artist: "Jay-Z featuring Amil (Of Major Coinz) and Ja Rule", video: "XKv2wi8ft_c", year: 1999},
      {song: "Mambo No. 5 (A Little Bit Of...)", artist: "Lou Bega", video: "EK_LN3XEcnw", year: 1999},
      {song: "Jumper", artist: "Third Eye Blind", video: "gRYZijLZR-Q", year: 1999},
      {song: "Summer Girls", artist: "LFO", video: "NHuGG_FsC20", year: 1999},


      //2000
      {song: "Breathe", artist: "Faith Hill", video: "yCmsZUN4r_s", year: 2000},
      {song: "Say My Name", artist: "Destiny's Child", video: "sQgd6MccwZc", year: 2000},
      {song: "Everything You Want", artist: "Vertical Horizon", video: "rZoD8JEFjAE", year: 2000},
      {song: "Maria Maria", artist: "Santana featuring The Product G&B", video: "nPLV7lGbmT4", year: 2000},
      {song: "Amazed", artist: "Lonestar", video: "x-skFgrV59A", year: 2000},
      {song: "Savage Garden", artist: "I Knew I Loved You", video: "jjnmICxvoVY", year: 2000},
      {song: "Higher", artist: "Creed", video: "J16lInLZRms", year: 2000},
      {song: "There You Go", artist: "P!nk", video: "66LnhtnSoKc", year: 2000},
      {song: "Thong Song", artist: "Sisqo", video: "Oai1V7kaFBk", year: 2000},
      {song: "Kryptonite", artist: "3 Doors Down", video: "xPU8OAjjS4k", year: 2000},
      {song: "What a Girl Wants", artist: "Christina Aguilera", video: "hpspGHeLOPE", year: 2000},
      {song: "Bye Bye Bye", artist: "'N Sync", video: "Eo-KmOd3i7s", year: 2000},
      {song: "I Need to Know", artist: "Marc Anthony", video: "fLVzw9wVd9o", year: 2000},
      {song: "I Try", artist: "Macy Gray", video: "WEQ0l_m3Xm0", year: 2000},
      {song: "Country Grammar (Hot...)", artist: "Nelly", video: "Y5qKNlcUwKs", year: 2000},
      {song: "All the Small Things", artist: "Blink 182", video: "9Ht5RZpzPqw", year: 2000},
      {song: "Blue (Da Ba Dee)", artist: "Eiffel 65", video: "68ugkg9RePc", year: 2000},
      {song: "The Real Slim Shady", artist: "Eminem", video: "eJO5HU_7_1w", year: 2000},
      {song: "Oops!...I Did It Again", artist: "Britney Spears", video: "CduA0TULnow", year: 2000},
      {song: "Party Up (Up In Here)", artist: "DMX", video: "thIVtEOtlWM", year: 2000},

      //2001
      {song: "Hanging By a Moment", artist: "Lifehouse", video: "tPnK39ax_AM", year: 2001},
      {song: "Fallin'", artist: "Alicia Keys", video: "Urdlvw0SSEc", year: 2001},
      {song: "Drops of Jupiter", artist: "Train", video: "7Xf-Lesrkuc", year: 2001},
      {song: "I'm Real", artist: "Jennifer Lopez featuring Ja Rule", video: "Sjx9oSJDAVQ", year: 2001},
      {song: "If You're Gone", artist: "Matchbox Twenty", video: "clKAdQnwJ7A", year: 2001},
      {song: "Thank You", artist: "Dido", video: "1TO48Cnl66w", year: 2001},
      {song: "It Wasn't Me", artist: "Shaggy featuring Ricardo 'Rikrok' Ducent", video: "GH_StQ6KdW0", year: 2001},
      {song: "Hit 'Em Up Style (Oops!)", artist: "Blu Cantrell", video: "LMOKlXfXn50", year: 2001},
      {song: "U Remind Me", artist: "Usher", video: "Bxau9B3jOHM", year: 2001},
      {song: "Drive", artist: "Incubus", video: "fgT9zGkiLig", year: 2001},
      {song: "Survivor", artist: "Destiny's Child", video: "Wmc8bQoL-J0", year: 2001},
      {song: "Lady Marmalade", artist: "Christina Aguilera, Lil' Kim, Mya & Pink", video: "RQa7SvVCdZk", year: 2001},
      {song: "Ms. Jackson", artist: "Outkast", video: "MYxAiK6VnXw", year: 2001},
      {song: "Love Don't Cost a Thing", artist: "Jennifer Lopez", video: "4kGvlESGvbs", year: 2001},
      {song: "I Hope You Dance", artist: "Lee Ann Womack", video: "RV-Z1YwaOiw", year: 2001},
      {song: "Get Ur Freak On", artist: "Missy Elliott", video: "FPoKiGQzbSQ", year: 2001},
      {song: "All or Nothing", artist: "O-Town", video: "TG8IkUoZ6j0", year: 2001},
      {song: "I Just Wanna Love U (Give It 2 Me)", artist: "Jay-Z", video: "nG8o_9RliwU", year: 2001},
      {song: "The Space Between", artist: "Dave Matthews Band", video: "YvzWRzTh7jg", year: 2001},
      {song: "I'm Like a Bird", artist: "Nelly Furtado", video: "roPQ_M3yJTA", year: 2001},

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


      //2005
      {song: "We Belong Together", artist: "Mariah Carey", video: "0habxsuXW4g", year: 2005},
      {song: "Hollaback Girl", artist: "Gwen Stefani", video: "Kgjkth6BRRY", year: 2005},
      {song: "Let Me Love You", artist: "Mario", video: "H64QG4UsrGI", year: 2005},
      {song: "Since U Been Gone", artist: "Kelly Clarkson", video: "R7UrFYvl5TE", year: 2005},
      {song: "One, Two Step", artist: "Ciara featuring Missy Elliott", video: "iBHNgV6_znU", year: 2005},
      {song: "Gold Digger", artist: "Kanye West featuring Jamie Foxx", video: "6vwNcNOTVzY", year: 2005},
      {song: "Boulevard of Broken Dreams", artist: "Green Day", video: "Soa3gO7tL-c", year: 2005},
      {song: "Candy Shop", artist: "50 Cent featuring Olivia", video: "SRcnnId15BA", year: 2005},
      {song: "Don't Cha", artist: "The Pussycat Dolls featuring Busta Rhymes", video: "YNSxNsr4wmA", year: 2005},
      {song: "Don't Phunk With My Heart", artist: "The Black Eyed Peas", video: "P4Bda6_usuc", year: 2005},
      {song: "Mr. Brightside", artist: "The Killers", video: "gGdGFtwCNBE", year: 2005},
      {song: "Pon de Replay", artist: "Rihanna", video: "oEauWw9ZGrA", year: 2005},
      {song: "Beverly Hills", artist: "Weezer", video: "HL_WvOly7mY", year: 2005},
      {song: "Drop It Like It's Hot", artist: "Snoop Dogg featuring Pharrell", video: "GtUVQei3nX4", year: 2005},
      {song: "Feel Good Inc", artist: "Gorillaz", video: "HyHNuVaZJ-k", year: 2005},
      {song: "Sugar, We're Goin Down", artist: "Fall Out Boy", video: "uhG-vLZrb-g", year: 2005},
      {song: "Run It!", artist: "Chris Brown", video: "w6QGe-pXgdI", year: 2005},
      {song: "Lonely", artist: "Akon", video: "6EEW-9NDM5k", year: 2005},
      {song: "Collide", artist: "Howie Day", video: "ca9ub9rpNK4", year: 2005},
      {song: "Soul Survivor", artist: "Young Jeezy featuring Akon", video: "gczBgNB-p1w", year: 2005},

    
    //2006
    {song: "Bad Day", artist: "Daniel Powter", video: "gH476CxJxfg", year: 2006},
    {song: "Temperature", artist: "Sean Paul", video: "dW2MmuA1nI4", year: 2006},
    {song: "Promiscuous", artist: "Nelly Furtado featuring Timbaland", video: "0J3vgcE5i2o", year: 2006},
    {song: "You're Beautiful", artist: "James Blunt", video: "oofSnsGkops", year: 2006},
    {song: "Hips Don't Lie", artist: "Shakira featuring Wyclef Jean", video: "DUT5rEU6pqM", year: 2006},
    {song: "Unwritten", artist: "Natasha Bedingfield", video: "b7k0a5hYnSI", year: 2006},
    {song: "Crazy", artist: "Gnarls Barkley", video: "-N4jf6rtyuw", year: 2006},
    {song: "Ridin'", artist: "Chamillionaire featuring Krayzie Bone", video: "CtwJvgPJ9xw", year: 2006},
    {song: "SexyBack", artist: "Justin Timberlake", video: "3gOHvDP_vCs", year: 2006},
    {song: "Check On It", artist: "Beyoncé featuring Slim Thug", video: "Q1dUDzBdnmI", year: 2006},
    {song: "So Sick", artist: "Ne-Yo", video: "IxszlJppRQI", year: 2006},
    {song: "Over My Head (Cable Car)", artist: "The Fray", video: "fFRkpvvop3I", year: 2006},
    {song: "I Write Sins Not Tragedies", artist: "Panic! At The Disco", video: "vc6vs-l5dkc", year: 2006},
    {song: "London Bridge", artist: "Fergie", video: "WD33ii01kXI", year: 2006},
    {song: "Move Along", artist: "The All-American Rejects", video: "XleOkGsYgO8", year: 2006},
    {song: "Dani California", artist: "Red Hot Chili Peppers", video: "Sb5aq5HcS1A", year: 2006},
    {song: "Snap Yo Fingers", artist: "Lil Jon featuring E-40 & Sean Paul Of The YoungBloodZ", video: "AoA-ByjIf2M", year: 2006},
    {song: "What Hurts the Most", artist: "Rascal Flatts", video: "7qH4qyi1-Ys", year: 2006},
    {song: "Chasing Cars", artist: "Snow Patrol", video: "GemKqzILV4w", year: 2006},
    {song: "Everytime We Touch", artist: "Cascada", video: "4G6QDNC4jPs", year: 2006},


    //2007
    {song: "Irreplaceable", artist: "Beyoncé", video: "2EwViQxSJJQ", year: 2007},
    {song: "Umbrella", artist: "Rihanna featuring Jay-Z", video: "CvBfHwUxHIk", year: 2007},
    {song: "The Sweet Escape", artist: "Gwen Stefani featuring Akon", video: "O0lf_fE3HwA", year: 2007},
    {song: "Buy U a Drank (Shawty Snappin')", artist: "T-Pain featuring Yung Joc", video: "dBrRBZy8OTs", year: 2007},
    {song: "Before He Cheats", artist: "Carrie Underwood", video: "WaSy8yy-mr8", year: 2007},
    {song: "Hey There Delilah", artist: "Plain White T's", video: "h_m-BjrxmgI", year: 2007},
    {song: "Makes Me Wonder", artist: "Maroon 5", video: "sAebYQgy4n4", year: 2007},
    {song: "Crank That (Soulja Boy)", artist: "Soulja Boy Tell'em", video: "8UFIYGkROII", year: 2007},
    {song: "Cupid's Chokehold / Breakfast In America", artist: "Gym Class Heroes featuring Patrick Stump", video: "eiiU-Fky18s", year: 2007},
    {song: "Stronger", artist: "Kanye West", video: "PsO6ZnUZI0g", year: 2007},
    {song: "Beautiful Girls", artist: "Sean Kingston", video: "MrTz5xjmso4", year: 2007},
    {song: "Pop, Lock & Drop It", artist: "Huey", video: "WEYMaSoXQUM", year: 2007},
    {song: "Thnks Fr Th Mmrs", artist: "Fall Out Boy", video: "onzL0EM1pKY", year: 2007},
    {song: "Waiting On the World to Change", artist: "John Mayer", video: "oBIxScJ5rlY", year: 2007},
    {song: "Lips of an Angel", artist: "Hinder", video: "RiSfTyrvJlg", year: 2007},
    {song: "Apologize", artist: "Timbaland featuring One Republic", video: "ZSM3w1v-A_Y", year: 2007},
    {song: "Bubbly", artist: "Colbie Caillat", video: "AWGqoCNbsvM", year: 2007},
    {song: "Rehab", artist: "Amy Winehouse", video: "KUmZp8pR1uc", year: 2007},
    {song: "Here (In Your Arms)", artist: "Hellogoodbye", video: "LSAECj0GXWQ", year: 2007},
    {song: "Party Like a Rock Star", artist: "Shop Boyz", video: "82vpIsQ3lX8", year: 2007},


    //2008
    {song: "Low", artist: "Flo Rida featuring T-Pain", video: "U2waT9TxPU0", year: 2008},
    {song: "Bleeding Love", artist: "Leona Lewis", video: "Vzo-EL_62fQ", year: 2008},
    {song: "No One", artist: "Alicia Keys", video: "rywUS-ohqeE", year: 2008},
    {song: "No Air", artist: "Jordin Sparks Duet With Chris Brown", video: "WBKnpyoFEBo", year: 2008},
    {song: "Love Song", artist: "Sara Bareilles", video: "qi7Yh16dA0w", year: 2008},
    {song: "Love In This Club", artist: "Usher featuring Young Jeezy", video: "cB5e0zHRzHc", year: 2008},
    {song: "Forever", artist: "Chris Brown", video: "5sMKX22BHeE", year: 2008},
    {song: "Take a Bow", artist: "Rihanna", video: "J3UjJ4wKLkg", year: 2008},
    {song: "Viva la Vida", artist: "Coldplay", video: "dvgZkm1xWPE", year: 2008},
    {song: "Whatever You Like", artist: "T.I.", video: "nQJACVmankY", year: 2008},
    {song: "Pocketful of Sunshine", artist: "Natasha Bedingfield", video: "gte3BoXKwP0", year: 2008},
    {song: "Closer", artist: "Ne-Yo", video: "z_aC5xPQ2f4", year: 2008},
    {song: "Touch My Body", artist: "Mariah Carey", video: "9b8erWuBA44", year: 2008},
    {song: "I'm Yours", artist: "I'm Yours", video: "EkHTsc9PU2A", year: 2008},
    {song: "See You Again", artist: "Miley Cyrus", video: "aJDC3Gg-F8w", year: 2008},
    {song: "Shake It", artist: "Metro Station", video: "_wjFahULCK8", year: 2008},
    {song: "Paper Planes", artist: "M.I.A.", video: "ewRjZoRtu0Y", year: 2008},
    {song: "Live Your Life", artist: "T.I. featuring Rihanna", video: "koVHN6eO4Xg", year: 2008},
    {song: "Our Song", artist: "Taylor Swift", video: "Jb2stN7kH28", year: 2008},
    {song: "Sweetest Girl (Dollar Bill)", artist: "Wyclef Jean featuring Akon, Lil Wayne & Niia", video: "sXJXLq1lN7U", year: 2008},

    //2009
    {song: "I Gotta Feeling", artist: "The Black Eyed Peas", video: "uSD4vsh1zDA", year: 2009},
    {song: "Poker Face", artist: "Lady Gaga", video: "bESGLojNYSo", year: 2009},
    {song: "Right Round", artist: "Flo Rida", video: "CcCw1ggftuQ", year: 2009},
    {song: "Single Ladies (Put a Ring On It)", artist: "Beyoncé", video: "4m1EFMoRFvY", year: 2009},
    {song: "You Belong With Me", artist: "Taylor Swift", video: "VuNIsY6JdUw", year: 2009},
    {song: "You Found Me", artist: "The Fray", video: "jFg_8u87zT0", year: 2009},
    {song: "Use Somebody", artist: "Kings Of Leon", video: "gnhXHvRoUd0", year: 2009},
    {song: "Blame It", artist: "Jamie Foxx featuring T-Pain", video: "rfjtpp90lu8", year: 2009},
    {song: "I Know You Want Me (Calle Ocho)", artist: "Pitbull", video: "hFoxg4IFtqc", year: 2009},
    {song: "Down", artist: "Jay Sean featuring Lil Wayne", video: "oUbpGmR1-QM", year: 2009},
    {song: "Best I Ever Had", artist: "Beyoncé", video: "Drake", year: 2009},
    {song: "Hot N Cold", artist: "Katy Perry", video: "kTHNpusq654", year: 2009},
    {song: "Don't Trust Me", artist: "3OH!3", video: "mdB3Oyd5HtU", year: 2009},
    {song: "Party In the U.S.A.", artist: "Miley Cyrus", video: "M11SvDtPBhA", year: 2009},
    {song: "Womanizer", artist: "Britney Spears", video: "rMqayQ-U74s", year: 2009},
    {song: "Good Girls Go Bad", artist: "Cobra Starship featuring Leighton Meester", video: "Ix5z1bRz4Sc", year: 2009},
    {song: "Love Lockdown", artist: "Kanye West", video: "HZwMX6T5Jhk", year: 2009},
    {song: "So What", artist: "P!nk", video: "FJfFZqTlWrQ", year: 2009},
    {song: "Gives You Hell", artist: "The All-American Rejects", video: "uxUATkpMQ8A", year: 2009},
    {song: "Second Chance", artist: "Shinedown", video: "WbsDPbr8qoM", year: 2009},

    //2010
    {song: "TiK ToK", artist: "Ke$ha", video: "iP6XpLQM2Cs", year: 2010},
    {song: "Need You Now", artist: "Lady Antebellum", video: "eM213aMKTHg", year: 2010},
    {song: "Hey, Soul Sister", artist: "Train", video: "kVpv8-5XWOI", year: 2010},
    {song: "OMG", artist: "Usher featuring will.i.am", video: "1RnPB76mjxI", year: 2010},
    {song: "Airplanes", artist: "B.o.B featuring Hayley Williams of Paramore", video: "kn6-c223DUU", year: 2010},
    {song: "Bad Romance", artist: "Lady Gaga", video: "qrO4YZeyl0I", year: 2010},
    {song: "Love the Way You Lie", artist: "Eminem featuring Rihanna", video: "uelHwf8o7_U", year: 2010},
    {song: "Dynamite", artist: "Taio Cruz", video: "VUjdiDeJ0xg", year: 2010},
    {song: "Bedrock", artist: "Young Money featuring Lloyd", video: "Ha80ZaecGkQ", year: 2010},
    {song: "Just the Way You Are", artist: "Bruno Mars", video: "LjhCEhWiKXk", year: 2010},
    {song: "Cooler Than Me", artist: "Mike Posner", video: "mqWq_48LxWQ", year: 2010},
    {song: "Empire State of Mind", artist: "Jay-Z + Alicia Keys", video: "QsZlY0Vz4-o", year: 2010},
    {song: "Billionaire", artist: "Travie McCoy featuring Bruno Mars", video: "8aRor905cCw", year: 2010},
    {song: "Not Afraid", artist: "Eminem", video: "j5-yKhDd64s", year: 2010},
    {song: "Replay", artist: "Iyaz", video: "WXxV9g7lsFE", year: 2010},
    {song: "Fireflies", artist: "Owl City", video: "psuRGfAaju4", year: 2010},
    {song: "Ridin' Solo", artist: "Jason Derulo", video: "8ESdn0MuJWQ", year: 2010},
    {song: "Just a Dream", artist: "Nelly", video: "N6O2ncUKvlg", year: 2010},
    {song: "Haven't Met You Yet", artist: "Michael Buble", video: "1AJmKkU5POA", year: 2010},
    {song: "Bulletproof", artist: "La Roux", video: "Kk8eJh4i8Lo", year: 2010},

    //2011
    {song: "Rolling in the Deep", artist: "Adele", video: "rYEDA3JcQqw", year: 2011},
    {song: "Party Rock Anthem", artist: "LMFAO featuring Lauren Bennett & GoonRock", video: "KQ6zr6kCPj8", year: 2011},
    {song: "Firework", artist: "Katy Perry", video: "QGJuMBdaqIw", year: 2011},
    {song: "E.T.", artist: "Katy Perry featuring Kanye West", video: "t5Sd5c4o9UM", year: 2011},
    {song: "Give Me Everything", artist: "Pitbull featuring Ne-Yo, Afrojack & Nayer", video: "EPo5wWmKEaI", year: 2011},
    {song: "F**k You (Forget You)", artist: "Cee Lo Green", video: "YNDVipmJfz8", year: 2011},
    {song: "Super Bass", artist: "Nicki Minaj", video: "4JipHEz53sU", year: 2011},
    {song: "Moves Like Jagger", artist: "Maroon 5 featuring Christina Aguilera", video: "iEPTlhBmwRg", year: 2011},
    {song: "S&M", artist: "Rihanna", video: "KdS6HFQ_LUc", year: 2011},
    {song: "Tonight (I'm Lovin' You)", artist: "Enrique Iglesias featuring Ludacris & DJ Frank E", video: "UecPqm2Dbes", year: 2011},
    {song: "Look At Me Now", artist: "Chris Brown featuring Lil Wayne & Busta Rhymes", video: "8gyLR4NfMiI", year: 2011},
    {song: "Good Life", artist: "OneRepublic", video: "jZhQOvvV45w", year: 2011},
    {song: "Black and Yellow", artist: "Wiz Khalifa", video: "nWAGLkyxQG0", year: 2011},
    {song: "Blow", artist: "Ke$ha", video: "CFWX0hWCbng", year: 2011},
    {song: "Dirt Road Anthem", artist: "Jason Aldean", video: "Lb9q1ScC4cg", year: 2011},
    {song: "Yeah 3X", artist: "Chris Brown", video: "3mC2ixOAivA", year: 2011},
    {song: "On the Floor", artist: "Jennifer Lopez featuring Pitbull", video: "t4H_Zoh7G5A", year: 2011},
    {song: "Raise Your Glass", artist: "P!nk", video: "XjVNlG5cZyQ", year: 2011},
    {song: "How to Love", artist: "Lil Wayne", video: "y8Gf4-eT3w0", year: 2011},
    {song: "The Show Goes On", artist: "Lupe Fiasco", video: "Rmp6zIr5y4U", year: 2011},


    //2012
    {song: "Somebody That I Used to Know", artist: "Gotye featuring Kimbra", video: "8UVNT4wvIGY", year: 2012},
    {song: "Call Me Maybe", artist: "Carly Rae Jepsen", video: "fWNaR-rxAic", year: 2012},
    {song: "We Are Young", artist: "Fun. featuring Janelle Monae", video: "Sv6dMFF_yts", year: 2012},
    {song: "Payphone", artist: "Maroon 5 featuring Wiz Khalifa", video: "KRaWnd3LJfs", year: 2012},
    {song: "Lights", artist: "Ellie Goulding", video: "0NKUpo_xKyQ", year: 2012},
    {song: "Glad You Came", artist: "The Wanted", video: "2ggzxInyzVE", year: 2012},
    {song: "Stronger (What Doesn't Kill You)", artist: "Kelly Clarkson", video: "Xn676-fLq7I", year: 2012},
    {song: "We Found Love", artist: "Rihanna featuring Calvin Harris", video: "tg00YEETFzg", year: 2012},
    {song: "Starships", artist: "Nicki Minaj", video: "SeIJmciN8mo", year: 2012},
    {song: "What Makes You Beautiful", artist: "One Direction", video: "QJO3ROT-A4E", year: 2012},
    {song: "Wild Ones", artist: "Flo Rida featuring Sia", video: "bpOR_HuHRNs", year: 2012},
    {song: "Set Fire To The Rain", artist: "Adele", video: "d9bB8csLSug", year: 2012},
    {song: "Everybody Talks", artist: "Neon Trees", video: "X5G9tIe84lE", year: 2012},
    {song: "I Won't Give Up", artist: "Jason Mraz", video: "O1-4u9W-bns", year: 2012},
    {song: "Boyfriend", artist: "Justin Bieber", video: "4GuqB1BQVr4", year: 2012},
    {song: "Young, Wild & Free", artist: "Snoop Dogg and Wiz Khalifa featuring Bruno Mars", video: "Wa5B22KAkEk", year: 2012},
    {song: "We Are Never Ever Getting Back Together", artist: "Taylor Swift", video: "WA4iX5D9Z64", year: 2012},
    {song: "Turn Me On", artist: "David Guetta featuring Nicki Minaj", video: "YVw7eJ0vGfM", year: 2012},
    {song: "Ni**as in Paris", artist: "Jay Z and Kanye West", video: "gG_dA32oH44", year: 2012},
    {song: "Too Close", artist: "Alex Clare", video: "zP50Ewh31E4", year: 2012},


    //2013
    {song: "Thrift Shop", artist: "Macklemore and Ryan Lewis featuring Wanz", video: "QK8mJJJvaes", year: 2013},
    {song: "Blurred Lines", artist: "Robin Thicke featuring T.I. and Pharrell", video: "yyDUC1LUXSU", year: 2013},
    {song: "Radioactive", artist: "Imagine Dragons", video: "ktvTqknDobU", year: 2013},
    {song: "Mirrors", artist: "Justin Timberlake", video: "uuZE_IRwLNI", year: 2013},
    {song: "Cruise", artist: "Florida Georgia Line featuring Nelly", video: "bmZ9xRO7M9M", year: 2013},
    {song: "Roar", artist: "Katy Perry", video: "CevxZvSJLk8", year: 2013},
    {song: "Ho Hey", artist: "The Lumineers", video: "zvCBSSwgtg4", year: 2013},
    {song: "Stay", artist: "Rihanna featuring Mikky Ekko", video: "JF8BRvqGCNs", year: 2013},
    {song: "Get Lucky", artist: "Daft Punk featuring Pharrell Williams", video: "mRreHko3Ksg", year: 2013},
    {song: "Wrecking Ball", artist: "Miley Cyrus", video: "My2FRPA3Gf8", year: 2013},
    {song: "Wake Me Up!", artist: "Avicii", video: "IcrbM1l_BoI", year: 2013},
    {song: "Scream & Shout", artist: "will.i.am featuring Britney Spears", video: "kYtGl1dX5qI", year: 2013},
    {song: "Holy Grail", artist: "Jay Z featuring Justin Timberlake", video: "wROzz-CGYY4", year: 2013},
    {song: "Don't You Worry Child", artist: "Swedish House Mafia featuring John Martin", video: "1y6smkh6c-0", year: 2013},
    {song: "Clarity", artist: "Zedd featuring Foxes", video: "IxxstCcJlsc", year: 2013},
    {song: "Started From the Bottom", artist: "Drake", video: "RubBzkZzpUA", year: 2013},
    {song: "Come & Get It", artist: "Selena Gomez", video: "n-D1EB74Ckg", year: 2013},
    {song: "I Love It", artist: "Icona Pop featuring Charli XCX", video: "UxxajLWwzqY", year: 2013},
    {song: "Safe and Sound", artist: "Capital Cities", video: "47dtFZ8CFo8", year: 2013},
    {song: "Royals", artist: "Lorde", video: "nlcIKh6sBtc", year: 2013},

    //2014
    {song: "Happy", artist: "Pharrell Williams", video: "ZbZSe6N_BXs", year: 2014},
    {song: "Dark Horse", artist: "Katy Perry featuring Juicy J", video: "0KSOMA3QBU0", year: 2014},
    {song: "All of Me", artist: "John Legend", video: "450p7goxZqg", year: 2014},
    {song: "Fancy", artist: "Iggy Azalea featuring Charli XCX", video: "O-zpOMYRi0w", year: 2014},
    {song: "Counting Stars", artist: "OneRepublic", video: "hT_nvWreIhg", year: 2014},
    {song: "Talk Dirty", artist: "Jason Derulo featuring 2 Chainz", video: "RbtPXFlZlHg", year: 2014},
    {song: "Rude", artist: "MAGIC!", video: "PIh2xe4jnpk", year: 2014},
    {song: "All About That Bass", artist: "Meghan Trainor", video: "7PCkvCPvDXk", year: 2014},
    {song: "Problem", artist: "Ariana Grande featuring Iggy Azalea", video: "iS1g8G_njx8", year: 2014},
    {song: "Stay With Me", artist: "Sam Smith", video: "pB-5XG-DbAA", year: 2014},
    {song: "Timber", artist: "Pitbull featuring Ke$ha", video: "hHUbLv4ThOo", year: 2014},
    {song: "Pompeii", artist: "Bastille", video: "F90Cw4l-8NY", year: 2014},
    {song: "Shake It Off", artist: "Taylor Swift", video: "nfWlot6h_JM", year: 2014},
    {song: "Am I Wrong", artist: "Nico and Vinz", video: "bg1sT4ILG0w", year: 2014},
    {song: "Turn Down For What", artist: "DJ Snake and Lil Jon", video: "HMUDVMiITOU", year: 2014},
    {song: "The Monster", artist: "Eminem featuring Rihanna", video: "EHkozMIXZ8w", year: 2014},
    {song: "Say Something", artist: "A Great Big World and Christina Aguilera", video: "-2U0Ivkn2Ds", year: 2014},
    {song: "Let Her Go", artist: "Passenger", video: "RBumgq5yVrA", year: 2014},
    {song: "Story of My Life", artist: "One Direction", video: "W-TE_Ys4iwM", year: 2014},
    {song: "Chandelier", artist: "Sia", video: "2vjPBrBU-TM", year: 2014},
    {song: "Bang Bang", artist: "Jessie J, Ariana Grande and Nicki Minaj", video: "0HDdjwpPM3Y", year: 2014},
    {song: "Habits (Stay High)", artist: "Tove Lo", video: "oh2LWWORoiM", year: 2014},

    //2015
    {song: "Uptown Funk", artist: "Mark Ronson featuring Bruno Mars", video: "OPf0YbXqDm0", year: 2015},
    {song: "Thinking Out Loud", artist: "Ed Sheeran", video: "lp-EO5I60KA", year: 2015},
    {song: "See You Again", artist: "Wiz Khalifa featuring Charlie Puth", video: "RgKAFK5djSk", year: 2015},
    {song: "Trap Queen", artist: "Fetty Wap", video: "i_kF4zLNKio", year: 2015},
    {song: "Sugar", artist: "Maroon 5", video: "09R8_2nJtjg", year: 2015},
    {song: "Shut Up and Dance", artist: "WALK THE MOON", video: "6JCLY0Rlx6Q", year: 2015},
    {song: "Blank Space", artist: "Taylor Swift", video: "e-ORhEE9VVg", year: 2015},
    {song: "Watch Me (Whip / Nae Nae)", artist: "Silento", video: "vjW8wmF5VWc", year: 2015},
    {song: "The Hills", artist: "The Weeknd", video: "yzTuBuRdAyA", year: 2015},
    {song: "Love Me Like You Do", artist: "Ellie Goulding", video: "AJtDXIazrMo", year: 2015},
    {song: "Take Me to Church", artist: "Hozier", video: "PVjiKRfKpPI", year: 2015},
    {song: "Where Are U Now", artist: "Skrillex and Diplo With Justin Bieber", video: "nntGTK2Fhb0", year: 2015},
    {song: "Fight Song", artist: "Rachel Platten", video: "xo1VInw-SKc", year: 2015},
    {song: "Worth It", artist: "Fifth Harmony featuring Kid Ink", video: "YBHQbu5rbdQ", year: 2015},
    {song: "Post To Be", artist: "Omarion featuring Chris Brown and Jhene Aiko", video: "aPxVSCfoYnU", year: 2015},
    {song: "Honey - I'm Good", artist: "Andy Grammer", video: "Go7gn6dugu0", year: 2015},
    {song: "Good for You", artist: "Selena Gomez featuring A$AP Rocky", video: "DXKHCgNFk1I", year: 2015},
    {song: "Hotline Bling", artist: "Drake", video: "uxpDa-c-4Mc", year: 2015},
    {song: "Stitches", artist: "Shawn Mendes", video: "VbfpW0pbvaU", year: 2015},
    {song: "Hey Mama", artist: "David Guetta featuring Nicki Minaj - Bebe Rexha and Afrojack", video: "uO59tfQ2TbA", year: 2015},


    //2016
    {song: "Love Yourself", artist: "Justin Bieber", video: "oyEuk8j8imI", year: 2016},
    {song: "One Dance (featuring Wizkid and Kyla)", artist: "Drake", video: "qL7zrWcv6XY", year: 2016},
    {song: "Work (featuring Drake)", artist: "Rihanna", video: "HL1UzIK-flA", year: 2016},
    {song: "Stressed Out", artist: "twenty one pilots", video: "pXRviuL6vMY", year: 2016},
    {song: "Hello", artist: "Adele", video: "YQHsXMglC9A", year: 2016},
    {song: "Closer (featuring Halsey)", artist: "The Chainsmokers", video: "0zGcUoRlhmw", year: 2016},
    {song: "CAN'T STOP THE FEELING!", artist: "Justin Timberlake", video: "ru0K8uYEZWw", year: 2016},
    {song: "I Took a Pill in Ibiza", artist: "Mike Posner", video: "foE1mO2yM04", year: 2016},
    {song: "Cake By the Ocean", artist: "DNCE", video: "vWaRiD5ym74", year: 2016},
    {song: "Me, Myself & I", artist: "G-Eazy x Bebe Rexha", video: "bSfpSOBD30U", year: 2016},
    {song: "Pillowtalk", artist: "Zayne", video: "C_3d6GntKbk", year: 2016},
    {song: "Cold Water (featuring Justin Bieber & MØ)", artist: "Major Lazer", video: "7JddDOHtcJU", year: 2016},
    {song: "Low Life (featuring The Weeknd)", artist: "Future", video: "K_9tX4eHztY", year: 2016},
    {song: "7 Years", artist: "Lukas Graham", video: "LHCob76kigA", year: 2016},
    {song: "Cheap Thrills (featuring Sean Paul)", artist: "Sia", video: "31crA53Dgu0", year: 2016},
    {song: "This Is What You Came For (featuring Rihanna)", artist: "Calvin Harris", video: "kOkQ4T5WO9E", year: 2016},
    {song: "Let It Go", artist: "James Bay", video: "GsPq9mzFNGY", year: 2016},
    {song: "H.O.L.Y.", artist: "Florida Georgia Line", video: "zXDAYlhdkyg", year: 2016},
    {song: "Into You", artist: "Ariana Grande", video: "1ekZEVeXwek", year: 2016},
    {song: "Panda", artist: "Desiigner", video: "E5ONTXHS2mM", year: 2016},


    //2017
    {song: "Shape of You", artist: "Ed Sheeran", video: "JGwWNGJdvx8", year: 2017},
    {song: "Despacito (featuring Justin Bieber) [Remix]", artist: "Luis Fonsi and Daddy Yankee", video: "dr_GAJZviR0", year: 2017},
    {song: "That’s What I Like", artist: "Bruno Mars", video: "PMivT7MJ41M", year: 2017},
    {song: "HUMBLE.", artist: "Kendrick Lamar", video: "tvTRZJ-4EyI", year: 2017},
    {song: "Something Just Like This", artist: "The Chainsmokers and Coldplay", video: "4u6bWs-ZG0o", year: 2017},
    {song: "Bad and Boujee (featuring Lil Uzi Vert)", artist: "Migos", video: "S-sJp1FfG7Q", year: 2017},
    {song: "Believer", artist: "Imagine Dragons", video: "7wtfhZwyrcc", year: 2017},
    {song: "Congratulations (featuring Quavo)", artist: "Post Malone", video: "SC4xMk98Pdc", year: 2017},
    {song: "Say You Won't Let Go", artist: "James Arthur", video: "0yW7w8F2TVA", year: 2017},
    {song: "I'm the One (featuring Justin Bieber, Quavo, Chance the Rapper and Lil Wayne)", artist: "DJ Khaled", video: "weeI1G46q0o", year: 2017},
    {song: "Unforgettable (featuring Swae Lee)", artist: "French Montana", video: "CTFtOOh47oo", year: 2017},
    {song: "Stay", artist: "Zedd and Alessia Cara", video: "yWEK4v9AVKQ", year: 2017},
    {song: "Black Beatles (featuring Gucci Mane)", artist: "Rae Sremmurd", video: "b8m9zhNAgKs", year: 2017},
    {song: "Starboy (featuring Daft Punk)", artist: "The Weeknd", video: "34Na4j8AVgA", year: 2017},
    {song: "Location", artist: "Khalid", video: "by3yRdlQvzs", year: 2017},
    {song: "Attention", artist: "Charlie Puth", video: "nfs8NYg7yQM", year: 2017},
    {song: "There's Nothing Holdin' Me Back", artist: "Shawn Mendes", video: "dT2owtxkU8k", year: 2017},
    {song: "Redbone", artist: "Childish Gambino", video: "nRJnZsB52Es", year: 2017},
    {song: "It Ain't Me", artist: "Kygo and Selena Gomez", video: "u3VTKvdAuIY", year: 2017},
    {song: "iSpy (featuring Lil Yachty)", artist: "KYLE", video: "5XK4v2fgMPU", year: 2017},
    {song: "Slow Hands", artist: "Niall Horan", video: "B1n_z7cCY14", year: 2017},
    {song: "Bounce Back", artist: "Big Sean", video: "phr1pOFK1V8", year: 2017},


    //2018
    {song: "God’s Plan", artist: "Drake", video: "xpVfcZ0ZcFM", year: 2018},
    {song: "Perfect", artist: "Ed Sheeran", video: "2Vv-BfVoq4g", year: 2018},
    {song: "Meant To Be", artist: "Bebe Rexha & Florida Georgia Line", video: "zDo0H8Fm7d0", year: 2018},
    {song: "Havana", artist: "Camila Cabello featuring Young Thug", video: "BQ0mxQXmLsk", year: 2018},
    {song: "Rockstar", artist: "Post Malone Featuring 21 Savage", video: "UceaB4D0jpo", year: 2018},
    {song: "Like It", artist: "Cardi B, Bad Bunny, & J Balvin", video: "xTlNMmZKwpA", year: 2018},
    {song: "Psycho", artist: "Post Malone Featuring Ty Dolla $ign", video: "au2n7VVGv_c", year: 2018},
    {song: "Girls Like You", artist: "Maroon 5 featuring Cardi B", video: "aJOTlE1K90k", year: 2018},
    {song: "Lucid Dreams", artist: "Juice WRLD", video: "mzB1VGEGcSU", year: 2018},
    {song: "Better Now", artist: "Post Malone", video: "UYwF-jdcVjY", year: 2018},
    {song: "Boo’d Up", artist: "Ella Mai", video: "6YNZlXfW6Ho", year: 2018},
    {song: "New Rules", artist: "Dua Lipa", video: "k2qgadSvNyU", year: 2018},
    {song: "Sad!", artist: "XXXTentacion", video: "iAeYPfrXwk4", year: 2018},
    {song: "Love Lies", artist: "Khalid & Normani", video: "xYtsL9znopI", year: 2018},
    {song: "No Tears Left To Cry", artist: "Ariana Grande", video: "ffxKSjUwKdU", year: 2018},
    {song: "Delicate", artist: "Taylor Swift", video: "tCXGJQYZ9JA", year: 2018},
    {song: "Friends", artist: "Marshmello & Anne-Marie", video: "jzD_yyEcp0M", year: 2018},
    {song: "Bad At Love", artist: "Halsey", video: "xdYFuCp3m9k", year: 2018},
    {song: "Tequila", artist: "Dan + Shay", video: "c4qgqNS_20s", year: 2018},
    {song: "Youngblood", artist: "5 Seconds Of Summer", video: "-RJSbO8UZVY", year: 2018},


    //2019
    {song: "Old Town Road", artist: "Lil Nas X featuring Billy Ray Cyrus", video: "r7qovpFAGrQ", year: 2019},
    {song: "Sunflower", artist: "Post Malone and Swae Lee", video: "ApXoWvfEYVU", year: 2019},
    {song: "Without Me", artist: "Halsey", video: "ZAfAud_M_mg", year: 2019},
    {song: "Bad Guy", artist: "Billie Eilish", video: "DyDfgMOUjCI", year: 2019},
    {song: "Happier", artist: "Marshmello and Bastille", video: "m7Bc3pLyij0", year: 2019},
    {song: "7 Rings", artist: "Ariana Grande", video: "QYh6mYIJG2Y", year: 2019},
    {song: "Sicko Mode", artist: "Travis Scott", video: "6ONRf7h3Mdk", year: 2019},
    {song: "Sucker", artist: "Jonas Brothers", video: "CnAmeh0-E-U", year: 2019},
    {song: "High Hopes", artist: "Panic! at the Disco", video: "IPXIgEAGe4U", year: 2019},
    {song: "Thank U, Next", artist: "Ariana Grande", video: "gl1aHhXnN1k", year: 2019},
    {song: "Truth Hurts", artist: "Lizzo", video: "P00HMxdsVZI", year: 2019},
    {song: "Dancing with a Stranger", artist: "Sam Smith and Normani", video: "av5JD1dfj_c", year: 2019},
    {song: "Señorita", artist: "Shawn Mendes and Camila Cabello", video: "Pkh8UtuejGw", year: 2019},
    {song: "I Don't Care ", artist: "Ed Sheeran and Justin Bieber", video: "y83x7MgzWOA", year: 2019},
    {song: "Eastside", artist: "Benny Blanco, Halsey and Khalid", video: "56WBK4ZK_cw", year: 2019},
    {song: "Shallow", artist: "Lady Gaga and Bradley Cooper", video: "bo_efYhYU2A", year: 2019},
    {song: "Sweet but Psycho", artist: "Ava Max", video: "WXBHCQYxwr0", year: 2019},
    {song: "Someone You Loved", artist: "Lewis Capaldi", video: "zABLecsR5UE", year: 2019},
    {song: "You Need to Calm Down", artist: "Taylor Swift", video: "Dkk9gvTmCXY", year: 2019},
    {song: "Going Bad", artist: "Meek Mill featuring Drake", video: "S1gp0m4B5p8", year: 2019},


    //2020
    {song: "Blinding Lights", artist: "The Weeknd", video: "4NRXx6U8ABQ", year: 2020},
    {song: "DANCE MONKEY", artist: "TONES AND I", video: "q0hyYWKXF0Q", year: 2020},
    {song: "Roses", artist: "SAINt JHN", video: "2zToEPpFEN8", year: 2020},
    {song: "Before You Go", artist: "Lewis Capaldi", video: "Jtauh8GcxBY", year: 2020},
    {song: "Head & Heart", artist: "Joel Corry x MNEK", video: "CRuOOxF-ENQ", year: 2020},
    {song: "Don't Start Now", artist: "Dua Lipa", video: "oygrmJFKYZY", year: 2020},
    {song: "Rockstar feat. Roddy Ricch", artist: "DaBaby", video: "mxFstYSbBmc", year: 2020},
    {song: "Own It (feat. Ed Sheeran & Burna Boy)", artist: "Stormzy", video: "eYwbGaSurCQ", year: 2020},
    {song: "Watermelon Sugar", artist: "Harry Styles", video: "E07s5ZYygMg", year: 2020},
    {song: "Savage Love", artist: "Jawsh 685, Jason Derulo", video: "Jvcv8trEuao", year: 2020},
    {song: "The Box", artist: "Roddy Ricch", video: "UNZqm3dxd2w", year: 2020},
    {song: "Say So", artist: "Doja Cat", video: "pok8H_KF1FA", year: 2020},
    {song: "Lonely", artist: "Joel Corry", video: "IIG4GgGKdKo", year: 2020},
    {song: "Breaking Me ft. A7S", artist: "Topic, A7S", video: "jIoEaTN7GGo", year: 2020},
    {song: "Rain On Me", artist: "Lady Gaga, Ariana Grande", video: "AoAm4om0wTs", year: 2020},
    {song: "Rover (Mu la la)", artist: "S1MBA ft. DTG", video: "lcUq0DDt0Ro", year: 2020},
    {song: "Mood", artist: "24kGoldn", video: "GrAchTdepsU", year: 2020},
    {song: "death bed (coffee for your head)", artist: "Powfu", video: "jJPMnTXl63E", year: 2020},
    {song: "Godzilla ft. Juice WRLD", artist: "Eminem", video: "r_0JjYUe5jo", year: 2020},
    {song: "Roxanne", artist: "Arizona Zervas", video: "16YnOUnbE6s", year: 2020},


    //2021
    {song: "Save Your Tears", artist: "The Weeknd", video: "XXYlFuWEuKI", year: 2021},
    {song: "drivers license", artist: "Olivia Rodrigo", video: "ZmDBbnmKpqQ", year: 2021},
    {song: "Leave the Door Open", artist: "Bruno Mars, Anderson .Paak, Silk Sonic", video: "adLGHcj_fmA", year: 2021},
    {song: "We're Good", artist: "Dua Lipa", video: "jr47YisIsz8", year: 2021},
    {song: "Justin Bieber", artist: "Peaches ft. Daniel Caesar, Giveon", video: "tQ0yjYUFKAE", year: 2021},
    {song: "Treat People With Kindness", artist: "Harry Styles", video: "L0X03zR0rQk", year: 2021},
    {song: "Vibez", artist: "ZAYN", video: "VSpgaN3wuag", year: 2021},
    {song: "I Spoiled You", artist: "Matt B", video: "38R584ESFpo", year: 2021},
    {song: "Don’t Play", artist: "Anne-Marie x KSI x Digital Farm Animals", video: "qjQjxpnwVZw", year: 2021},
    {song: "Sad", artist: "Rilan", video: "qWR-Kwrm02g", year: 2021},
    {song: "Skin", artist: "Sabrina Carpenter", video: "CA9E4HHHbRk", year: 2021},
    {song: "Dynamite", artist: "BTS (방탄소년단)", video: "gdZLi9oWNZg", year: 2021},
    {song: "No Drama", artist: "Anxhelina", video: "MjWR5Sa8UFI", year: 2021},
    {song: "Unbothered", artist: "Yarin Glam", video: "6CedW3L6818", year: 2021},
    {song: "GIRL LIKE ME", artist: "Black Eyed Peas, Shakira", video: "vMLk_T0PPbk", year: 2021},
    {song: "Wave of You", artist: "Surfaces", video: "h6BkYrE6yMU", year: 2021},
    {song: "Garden", artist: "Gavin Haley", video: "hZ3bzbotFAI", year: 2021},
    {song: "Do With Me What You Want", artist: "Nasri", video: "_kFC9yuIMo4", year: 2021},
    {song: "positions", artist: "Ariana Grande", video: "tcYodQoapMg", year: 2021},
    {song: "WYA", artist: "Taylor Jade", video: "Ob2XvybKFok", year: 2021},
    
  ]



  function handleChangeDate(value){
    const fullDate = value.getFullYear()
    setDate(value)
    setDateForVid(fullDate)
    setVideo(true)
    
    let theseVids = vids.filter((vid) => vid.year === fullDate + 13 || vid.year === fullDate + 14 || vid.year === fullDate + 15)
    console.log(theseVids.length)
    setEmbed(theseVids[(Math.floor(Math.random() * theseVids.length))])
    
  }

  function selectVideo(){
    let theseVids = vids.filter((vid) => vid.year === dateForVid + 13 || vid.year === dateForVid + 14 || vid.year === dateForVid + 15)
    console.log(theseVids.length)
    setEmbed(theseVids[(Math.floor(Math.random() * theseVids.length))])
  }

  console.log(date)
  console.log(dateForVid)
  console.log(embed)
  return (
<>

      <Header/>
      <TextContainer>
        <Welcome>This is TimeWarp</Welcome>
        <MissionStatement>If you would be so kind as to enter your birth date, TimeWarp will generate a song or music video from your formative years to trigger immediate nostalgia. </MissionStatement>
      </TextContainer>

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

    <ContainerTwo>
          <Welcome> This site was written and designed by Jen Tracy and Alex Marz </Welcome>
    </ContainerTwo>
    </>
  );
}


export default App;

const Container = styled.section`
    padding:4%;
    display: flex;
    flex-wrap: flex;
    justify-content: center;
  `
  const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    padding-top: 0;
  `

const Welcome = styled.h1`
  text-align: center;
  font-family: font-family: MS Courier New, monospace;
  `

const MissionStatement = styled.p`
    text-align: center;
    justify-content: center;
    font-family: font-family: MS Courier New, monospace;
    font-size: 80%;
    max-width: 100%;
`
 
const ContainerTwo = styled.section`
position: absolute;
left:0;
bottom:0;
right:0;

`