import React, { Component } from 'react';
import uuid from 'uuid';
import dummyData, { searchIcons, postIcons } from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import ProfileSection from './components/ProfileSection/ProfileSection';
import './App.css';

// assign variables
let postData = dummyData;
const localStorage = window.localStorage;

if (localStorage.getItem("posts-saved")) {
  // initialize saving to local storage
  postData = JSON.parse(localStorage.getItem("posts-saved"));
} else {
  localStorage.setItem("posts-saved", JSON.stringify(postData));
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: postData,
      searchString: ""
    }
  }

  addComment = (postId, commentText) => {
    let newComment = {
      id: uuid(),
      username: "thedrflynn",
      text: commentText
    }
    this.setState({
      ...this.state, postData: this.state.postData.map(post => {
        if (postId === post.id) {
          return {
            ...post, comments: post.comments.concat(newComment)
          }
        }
        return post;
      })
    })
  }
  
  savePosts = () => {
    localStorage.setItem("posts-saved", JSON.stringify(this.state.postData));
  };

  searchPosts = event => {
    this.setState({
      searchString: event.target.value
    });
  };

  render() {
    // Call save post method on render to save current state
    this.savePosts();
    return (
      <div className="App">
        <SearchBar
          value={this.state.searchString}
          changeHandler={this.searchPosts}
          searchIcons={searchIcons}
        />
        <main className="main">
          <PostContainer
            searchString={this.state.searchString}
            postData={this.state.postData}
            postIcons={postIcons}
            addComment={this.addComment}
          />
          <ProfileSection />
        </main>
      </div>
    );
  }
}
