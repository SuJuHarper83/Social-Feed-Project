// Within the “DisplayPosts” component, create the feed where all your posts will be displayed in your app. 
// All posts should be passed into this component using props. 

import Posts from "../Post/Post";

const DisplayPosts = (props) => {
    return ( 
        <div class='Card'>
            <div class='container'>
                {props.parentPosts.map((post) => {
                    return (
                    <Posts post={post}></Posts>
                );
            })}
            </div>
        </div>
    );
}

export default DisplayPosts;