import React, { Component } from 'react';

import List from './components/List.js';
import Posts from './services/Posts.js';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {

    super(props);
    this.state = {};

  }


  componentDidMount() {

    Posts.fetch().then(posts => {
      this.setState({ posts })
    });

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Same list component reused:</h1>
        </header>

        <div style={{ display:'flex', padding:'10px', border:'1px solid purple' }}>
          <div>
            <p>titleKey==<b>title</b> &amp; textKey==<b>content</b></p>
            <List collection={this.state.posts} textKey='content' titleKey='title' />
          </div>
          
          <div>
            <p>titleKey==<b>id</b> &amp; textKey==<b>location</b></p>
            <List collection={this.state.posts} textKey='location' titleKey='id' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

