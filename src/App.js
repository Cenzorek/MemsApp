import { useState } from 'react';

import Nav from './Nav'
import Hot from './Hot';
import Regular from './Regular';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import rodzina from './images/Rodzina.jpg';
import ciało from './images/ciało.jpg';
import smieszne from './images/smieszne.jpg';
import niebinarni from './images/niebinarni.jpg';
import figurki from './images/figurki.jpg';
import dieta from './images/dieta.jpg';
import komunista from './images/komunista.jpg';
import skuter from './images/skuter.jpg';
import kumple from './images/kumple.jpg';
import wolverin from './images/wolverin.jpg';
import zamek from './images/zamek.jpg';
import kot from './images/kot.jpg';
import tron from './images/tron.jpg';
import kotpies from './images/kotpies.jpg';
import zdrowia from './images/zdrowia.jpg';
import bucik from './images/bucik.jpg';
import lis from './images/lis.jpg';
import kanapa from './images/kanapa.jpg';
import natura from './images/natura.jpg';
import markowe from './images/markowe.jpg';


let memesArray = [
  {
    id: 1,
    title: "W co się bawisz?",
    upvotes: 1,
    downvotes: 2,
    image: <img src={rodzina} alt='Obrazek'></img>,
    favourite: true
  },
  {
    id: 2,
    title: "Forma na lato.",
    upvotes: 4,
    downvotes: 3,
    image: <img src={ciało} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 3,
    title: "Osobowość zależna",
    upvotes: 2,
    downvotes: 1,
    image: <img src={smieszne} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 4,
    title: "Za komuny to dopiero było.",
    upvotes: 3,
    downvotes: 3,
    image: <img src={niebinarni} alt='Obrazek'></img>,
    favourite: false

  },
  {
    id: 5,
    title: "Nowe figurki z Chin.",
    upvotes: 6,
    downvotes: 1,
    image: <img src={figurki} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 6,
    title: "Rodzice z poczuciem humoru.",
    upvotes: 1,
    downvotes: 0,
    image: <img src={komunista} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 7,
    title: "Mamy są nieomylne.",
    upvotes: 9,
    downvotes: 5,
    image: <img src={skuter} alt='Obrazek'></img>,
    favourite: true
  },
  {
    id: 8,
    title: "Ktoś tutaj podpadł Wolverinowi.",
    upvotes: 3,
    downvotes: 1,
    image: <img src={wolverin} alt='Obrazek'></img>,
    favourite: true
  },
  {
    id: 9,
    title: "Przy obecnych cenach założyłbym też zamek numeryczny.",
    upvotes: 3,
    downvotes: 0,
    image: <img src={zamek} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 10,
    title: "Sierściuch wie co dobre.",
    upvotes: 4,
    downvotes: 3,
    image: <img src={kot} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 11,
    title: "Tron godny króla.",
    upvotes: 10,
    downvotes: 0,
    image: <img src={tron} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 12,
    title: "Żyją jak pies z kotem.",
    upvotes: 4,
    downvotes: 1,
    image: <img src={kotpies} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 13,
    title: "Polska służba zdrowia w pigułce.",
    upvotes: 13,
    downvotes: 1,
    image: <img src={zdrowia} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 14,
    title: "Bucik informatyka.",
    upvotes: 8,
    downvotes: 1,
    image: <img src={bucik} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 15,
    title: "Ciekawe, co będzie chciał upichcić.",
    upvotes: 1,
    downvotes: 1,
    image: <img src={lis} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 16,
    title: "Kanapa dla wampira.",
    upvotes: 1,
    downvotes: 4,
    image: <img src={kanapa} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 17,
    title: "Kształty natury.",
    upvotes: 17,
    downvotes: 0,
    image: <img src={natura} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 18,
    title: "Markowe gaśnice.",
    upvotes: 5,
    downvotes: 12,
    image: <img src={markowe} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 19,
    title: "Najtrudniejsza dieta.",
    upvotes: 23,
    downvotes: 15,
    image: <img src={dieta} alt='Obrazek'></img>,
    favourite: false
  },
  {
    id: 20,
    title: "Bez kumpla nigdzie się nie ruszy.",
    upvotes: 3,
    downvotes: 1,
    image: <img src={kumple} alt='Obrazek'></img>,
    favourite: false
  }

]
let filteredHotMemes = memesArray.filter(mem => ((mem.upvotes - mem.downvotes) > 5))
let filteredRegularMemes = memesArray.filter(mem => ((mem.upvotes - mem.downvotes) < 5))

function App(props) {
  const [memesState, setMemesState] = useState(filteredRegularMemes)
  const [hotMemes, setHotmemes] = useState(filteredHotMemes)

  const updateUpvoteArr = memObj => {
    for (let i = 0; i < memesState.length; i++) {
      if (memesState[i].title === memObj.title) {
        memesState[i].upvotes++

        if (memesState[i].upvotes - memesState[i].downvotes > 5) {
          setMemesState([...memesState.splice(0, i), ...memesState.splice(i + 1, memesState.length)])
          setHotmemes(prevHots => {
            return [...prevHots, memesState[i]]
          })
          return

        }
      }
    }

  }

  const updateDownvoteRegular = memObj => {
    for (let i = 0; i < memesState.length; i++) {
      if (memesState[i].title === memObj.title) {
        memesState[i].downvotes++
      }
    }

  }

  const updateDownvoteHotArr = memObj => {
    for (let i = 0; i < hotMemes.length; i++) {
      if (hotMemes[i].title === memObj.title) {
        hotMemes[i].downvotes++
        if ((hotMemes[i].upvotes - hotMemes[i].downvotes) < 5) {
          setHotmemes([...hotMemes.splice(0, i), ...hotMemes.splice(i + 1, hotMemes.length)])
          setMemesState(prevHots => {
            return [...prevHots, hotMemes[i]]
          })
          return

        }

      }
    }

  }

  const updateUpvoteHot = memObj => {
    for (let i = 0; i < hotMemes.length; i++) {
      if (hotMemes[i].title === memObj.title) {
        hotMemes[i].upvotes++
      }
    }
  }

  const onToggleRegularHandler = value => {
    for (let i = 0; i < memesState.length; i++) {
      if (memesState[i].title === value) {
        memesState[i].favourite = true ? false : true;
        console.log("on toggle workss" + memesState[i].favourite)
      }
    }
  }

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home!</h1>} />
          <Route path="/hot/"
            element={<Hot memes={hotMemes}
              updateUpvote={updateUpvoteHot}
              updateDownvote={updateDownvoteHotArr}
            />}
          />
          <Route path="/regular"
            element={<Regular memes={memesState}
              updateUpvote={updateUpvoteArr}
              updateDownvote={updateDownvoteRegular}
              onToggle={onToggleRegularHandler}
            />} />
          <Route path="*" element={<h1>Error 404</h1>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
