import React, { useState } from 'react';
import CreatePostForm from "./Components/CreatePost/CreatePost";
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';
import Card from 'react-bootstrap/Card'
// import './App.css';

// Think of the app.jsx as the table of contents, and each of the compnents as a page
// people can edit the page, but the TOC will remain solid and the elements will all filter
// up into the TOC

function App() {

  const [posts, setPosts] = useState([{name: "Jennie", post: "Hello world!"}])

  // function to pass down to the child component
  // tempPosts another variable, set to an empty array - the new entry that's being passed through the form
  // setPosts - the way to update the state variable
  // create a temporary object to store any new data, and set state variable to the temp object
  function createNewPost(post){
    // this is temp storage for when we don't have a DB 
    let tempPosts = [post, ...posts];
    // this can be the same as the "unshift" method to bring entries to the top vs. the bottom
    // [post, ...posts] vs. [...posts, post] - but only if it's in temp storage and we have no DB
    setPosts(tempPosts)
  }

  // passes down to child components
  // page is divided into 12 columns
  // These can be inline styling - however they can be class named and styled in the css file
 
  return (
  <div>
    <div>
      <Card className = 'nav' style={{ width: '18rem'}}>
      <Card.Title className = 'NavBar'>
          <NavBar></NavBar>
      </Card.Title>
      </Card>
    </div>
    <div>
      <Card className = 'Post' style={{ width: '18rem'}}>
      <Card.Header className = 'CreatedPost'>
          <CreatePostForm createNewPostProperty = {createNewPost} />
      </Card.Header>
      </Card>
    </div>
    <div>
      <Card className = 'feed' style={{ width: '18rem'}}>
      <Card.Body className = 'PostFeed' >
          <DisplayPosts parentPosts = {posts} />
      </Card.Body>
      </Card>
    </div>
  </div>  

 );

}

export default App;
