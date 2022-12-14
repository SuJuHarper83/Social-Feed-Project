// create the "like" and "dislike" buttons here
// export, and call this component into the Post component

// Lastly, you will need to build out the “like” and “dislike” functionality. 
// Within the “Post” component, create 2 separate functions – one for when the “like” button is clicked, 
// and one for when the “dislike” button is clicked. Bind these functions to their respective button’s onClick event. 
// Within these functions, start to lay out the steps that need to occur when each button is clicked.

// For now, do not worry about the functionality for the “like” and “dislike” buttons 
// just decide where and how you would like them to display on each individual post!

import { useState } from 'react'
import inactive_dislike from '../Post/Assets/inactive dislike.png'
import inactive_like from '../Post/Assets/inactive like.png'
// import active_dislike from '../Post/Assets/active_dislike.png'
// import active_like from '../Post/Assets/active_like.png'


const LikeButtons = (props) => {
    
    const [likeButton, setLikeButton] = useState('inactive');
    const [dislikeButton, setDislike] = useState('inactive');

    function handleLike(){
        if (likeButton === 'inactive'){
            setLikeButton('activeLike');
            setDislike('inactive');
        }
        else{
            setLikeButton('inactive');
        }
}

    function handleDislike(){
        if (dislikeButton === 'inactive'){
            setDislike('activeDislike');
            setLikeButton('inactive');
        }
        else{
            setDislike('inactive');
        }
}

    return (
        <div>
            <div className="like">
                <button type="toggle" className={likeButton} onClick={handleLike}><img src={inactive_like} alt="Thumbs Up" width={18}></img></button>
            </div>
            <div className="dislike">
                <button type="toggle" className={dislikeButton} onClick={handleDislike}><img src={inactive_dislike} alt="Thumbs Down" width={15}></img></button>
            </div>
        </div>
    )
}

export default LikeButtons