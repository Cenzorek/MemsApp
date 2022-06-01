import { useState, useEffect } from 'react';
import Mem from './Mem';

const Memy = (props, onToggle) => {

  const [memy, setMemy] = useState(props.memes)

  useEffect(() => {
    setMemy(props.memes)
  },
  [props.memes])

  return (
    <div>
      {memy.map(mem =>
      (<Mem
        key={mem.id}
        title={mem.title}
        image={mem.image}
        upvotes={mem.upvotes}
        downvotes={mem.downvotes}
        updateUpvote={props.updateUpvote}
        updateDownvote={props.updateDownvote}
        onToggle={props.onToggle}
      />))}
    </div>
  )
}

export default Memy
