import Memy from './Memy';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
  
  const Regular = (props) => {
    const location = useLocation();
  
    useEffect(() => {
      if(location.pathname === "/regular") {
        console.log("regular");
      }
    }, [location]);
  
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