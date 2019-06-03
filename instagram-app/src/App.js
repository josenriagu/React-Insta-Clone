import React from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
