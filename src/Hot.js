import React from 'react';
import Memy from './Memy';

import { useEffect, useState } from 'react';

const Hot = (props) => {
  const [hotMemes, setHotMemes] = useState(props.memes)

  useEffect(() => {
    setHotMemes(props.memes)
  }, [props.memes])


  return (
    <div className="containerH">
      <h1>Hot mems!</h1>
      <Memy memes={hotMemes}
        updateUpvote={props.updateUpvote}
        updateDownvote={props.updateDownvote}
      />
    </div>
  )
}

export default Hot