// Within the “Post” component create a template of how you would like each individual post to be displayed. 
// This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.

// Then, utilize the “map” higher order array method to map each post to its own Post component.
// This is done in the app.jsx file

const Posts = (props) => {
    return (
        <div>
            <h3>{props.post.name}</h3>
            <p>{props.post.post}</p>
            {/*  call our button component here */}
            <p>{props.post.likeButton}</p>
            <p>{props.post.dislikeButton}</p>
        </div>

  );
}

export default Posts;
