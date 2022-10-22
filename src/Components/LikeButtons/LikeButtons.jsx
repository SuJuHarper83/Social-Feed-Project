// create the "like" and "dislike" buttons here
// export, and call this component into the Post component

// Lastly, you will need to build out the “like” and “dislike” functionality. 
// Within the “Post” component, create 2 separate functions – one for when the “like” button is clicked, 
// and one for when the “dislike” button is clicked. Bind these functions to their respective button’s onClick event. 
// Within these functions, start to lay out the steps that need to occur when each button is clicked.

// For now, do not worry about the functionality for the “like” and “dislike” buttons 
// just decide where and how you would like them to display on each individual post!

import { useState } from 'react'
import './LikeButtons.css'

const LikeButtons = (props) => {
    
    const [likeButton, setLikeButton] = useState('inactive');
    const [dislikeButton, setDislike] = useState('inactive');

    function handleLike(event){
        if (likeButton === 'inactive'){
            setLikeButton('active');
        }
        else{
            setLikeButton('inactive');
        }
}

    function handleDislike(event){
        if (dislikeButton === 'inactive'){
            setDislike('active');
        }
        else{
            setDislike('inactive');
        }
}

    return (
        <div>
            <div>
                <button className={likeButton} onClick={(event) => handleLike}>{props.likeButton}</button>
            </div>
            <div>
                <button className={dislikeButton} onClick={(event) => handleDislike}>{props.dislikeButton}</button>
            </div>
        </div>
    )
}

export default LikeButtons