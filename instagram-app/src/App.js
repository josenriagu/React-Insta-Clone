import React, { Component } from 'react';
import uuid from 'uuid';
import dummyData, { searchIcons, postIcons } from './dummy-data';
import withAuthenticate from './components/authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      searchString: ""
    }
  }

  componentDidMount() {
    const posts = JSON.parse(localStorage.getItem("posts-saved"));
    this.setState({ ...this.state, postData: posts || dummyData });
  }

  addLike = async (postId) => {
    await this.setState({
      ...this.state, postData: this.state.postData.map(post => {
        if (postId === post.id) {
          if (post.likeStatus === false) {
            return {
              ...post, likes: post.likes + 1, likeStatus: !post.likeStatus
            }
          }
          return {
            ...post, likes: post.likes - 1, likeStatus: !post.likeStatus
          };
        }
        return post;
      })
    })
    await this.savePosts();
  }

  addComment = async (postId, commentText) => {
    let newComment = {
      id: uuid(),
      username: JSON.parse(localStorage.getItem("username")),
      text: commentText
    }
    await this.setState({
      ...this.state, postData: this.state.postData.map(post => {
        if (postId === post.id) {
          return {
            ...post, comments: post.comments.concat(newComment)
          }
        }
        return post;
      })
    })
    await this.savePosts();
  }

  deleteComment = async (postId, commentId) => {
    const parentPost = this.state.postData.filter(post => post.id === postId)
    const filteredComments = parentPost[0].comments.filter(comment => comment.id !== commentId)
    await this.setState({
      ...this.state, postData: this.state.postData.map(post => {
        if (postId === post.id) {
          return {
            ...post, comments: filteredComments
          }
        }
        return post;
      })
    });
    await this.savePosts();
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
    return (
      <div className="App">
        <ComponentFromWithAuthenticate
          value={this.state.searchString}
          changeHandler={this.searchPosts}
          searchIcons={searchIcons}
          searchString={this.state.searchString}
          postData={this.state.postData}
          postIcons={postIcons}
          addComment={this.addComment}
          addLike={this.addLike}
          deleteComment={this.deleteComment}
        />
      </div>
    );
  }
}