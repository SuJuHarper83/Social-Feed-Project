// Within the “DisplayPosts” component, create the feed where all your posts will be displayed in your app. 
// All posts should be passed into this component using props. 
// Then, utilize the “map” higher order array method to map each post to its own Post component.
import Card from 'react-bootstrap/Card';
import Posts from "../Post/Post";

const DisplayPosts = (props) => {
    return ( 
        <div>
        <Card style={{ width: '18rem'}}>
        <Card.Body>
            {props.parentPosts.map((post) => {
                return (
                <Posts post={post}></Posts>
            );
        })}
        </Card.Body>
        </Card>
        </div>
    );
}

export default DisplayPosts;