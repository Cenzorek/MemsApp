import { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';


const Mem = ({ id, title, image, upvotes, downvotes, updateUpvote, updateDownvote, onToggle, favourite }) => {
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, setDownvote] = useState(downvotes);
  const [favStyle, setFavStyle] = useState(favourite)

  const upvoteHandler = () => {
    setUpvote(upvote + 1);
    let memeUpvoted = {
      title: title
    }
    updateUpvote(memeUpvoted) //send information to parent
  }

  const downVoteHandler = () => {
    setDownvote(downvote + 1);
    let memeDownvoted = {
      title: title
    }
    updateDownvote(memeDownvoted) //send information to parent
  }
  const onToggleHandler = () => {
    if (favStyle) {
      setFavStyle(false)
    } else {
      setFavStyle(true)
    }
    return title
  }

  return (

    <div className={`images ${favStyle && "fav"}`}>
      <p>{title}</p>
      <p onDoubleClick = {onToggleHandler} >{image}</p>
      <div className='wrapper'>
        <button
          image={image}
          onClick={upvoteHandler}
          className='btn'
          type="submit">
          <FaRegThumbsUp />
          {upvote}
          </button>
        <button
          onClick={downVoteHandler}
          className='btn'
          type="submit">
          <FaRegThumbsDown />
          {downvote}
        </button>
      </div>
    </div>
  )
}

export default Mem
