import React from 'react';

import './App.css';

import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className='container'>

        <TweetForm />

        <TweetList />
        <div class="round-btn">
          <i class="round-btn__icon fas fa-angle-double-up"></i>
        </div>
      </main>


    </div>
  );
}

export default App;
