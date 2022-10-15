// Within the “DisplayPosts” component, create the feed where all your posts will be displayed in your app. 
// All posts should be passed into this component using props. 
// Then, utilize the “map” higher order array method to map each post to its own Post component.
import Posts from "../Post/Post";

const DisplayPosts = (props) => {
    return ( 
        <div>
            {props.parentPosts.map((newPost, index) => {
                return (
                <Posts post={newPost} index={index}></Posts>
            );
        })}
        </div>
    );
}

export default DisplayPosts;