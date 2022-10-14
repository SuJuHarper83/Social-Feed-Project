import React, { useState } from 'react';
import CreatePostForm from "./Components/CreatePost/CreatePost";
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';
// import './App.css';

function App() {

  const [posts, setPosts] = useState([{name: "Jennie", post: "Hello world!"}])

  // function to pass down to the child component
  // tempPosts another variable, set to an empty array - the new entry that's being passed through the form
  // setPosts - the way to update the state variable
  // create a temporary object to store any new data, and set state variable to the temp object
  function createNewPost(post){

    let tempPosts = [...posts, post];

    setPosts(tempPosts)
  }

  // passes down to child components
  // page is divided into 12 columns
  return (
    <div className='container-fluid'>
      <div className='row'>
        <NavBar></NavBar>
          <div className='border-box'>
            <DisplayPosts parentPosts = {posts} />
            <CreatePostForm createNewPosProperty = {createNewPost} />
          </div>
      </div>
    </div>
  );
}

export default App;
