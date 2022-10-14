// Within the “CreatePost” component create a form with 2 input fields. 
// There should be an input field for the user’s name, as well as the body of their post, 
// and each should be bound to its own state variable.

// Implement a “handleSubmit” method for your form, which should pass the entered 
// values to a function on the App.jsx component. 
// That function should create a new “post” object, add it to the existing array of posts, 
// and update the App.js state variable with the new array.

import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [name, setName] = useState("");
    const [post, setPost] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.createNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <div className='form-group'>
                <label>Name</label>                                          
                <input type="name" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type="post" className="form-control" value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type="create" className="btn btn-primary" style={{'margin-top': '1em'}}>Create</button>
        </form>
     );
}
 
export default CreatePostForm;