import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import BlogList from './components/BlogList';

function App() {
  
  const [ posts, setPosts ] = useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:5000/api/posts")
    .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(err=> console.log("THis is the error", err))
  }, [])

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Somewhat Blogpost</a>
      </nav>
      <div className="container-md">
        <BlogList posts={posts} />
      </div>
    </div>
  );
}

export default App;
