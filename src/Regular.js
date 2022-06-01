import Memy from './Memy';

const Regular = (props) => {

  return (
    <div className="containerR">
      <h1>Regular mems</h1>
      <Memy memes={props.memes}
        updateUpvote={props.updateUpvote}
        updateDownvote={props.updateDownvote}
        onToggle={props.onToggle}
      />
    </div>
  )
}

export default Regular