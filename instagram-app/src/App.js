import React, { Component } from 'react';
import dummyData from './dummy-data';
import searchIcons from './searchIcons';
import postIcons from './postIcons';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import ProfileSection from './components/ProfileSection/ProfileSection';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar
          searchIcons={searchIcons}
        />
        <main className="main">
          <PostContainer
          dummyData={dummyData}
          postIcons={postIcons}
          />
          <ProfileSection />
        </main>
        
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <SearchBar />
//       <PostContainer />
//     </div>
//   );
// }

// export default App;
