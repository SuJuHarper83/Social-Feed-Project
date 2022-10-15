import React, { useState } from 'react';
import CreatePostForm from "./Components/CreatePost/CreatePost";
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';
import Card from 'react-bootstrap/Card'
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
    <div>
    <Card style={{ width: '18rem'}}>
      <Card.Body>
        <NavBar></NavBar>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}}>
      <Card.Body>
        <CreatePostForm createNewPosProperty = {createNewPost} />
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}}>
      <Card.Body>
        <DisplayPosts parentPosts = {posts} />
      </Card.Body>
    </Card>
    </div>

  );
}

export default App;
