// Within the “Post” component create a template of how you would like each individual post to be displayed. 
// This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.

// Then, utilize the “map” higher order array method to map each post to its own Post component.
// This is done in the app.jsx file
// import LikeButtons from "../LikeButtons/LikeButtons";

const Posts = (props) => {
    return (
        <div>
            <h3>{props.post.name}</h3>
            <p>{props.post.post}</p>
            {/*  call our button component here */}
            {/* <LikeButtons /> */}
            <button className = "thumbs-up"><img src="./social-feed-project\src\Components\Post\Assets\like.png"></img></button><span></span>
            <button className = "thumbs-down"><img src="./social-feed-project\src\Components\Post\Assets\dislike.png"></img></button>
        </div>

  );
}

export default Posts;
