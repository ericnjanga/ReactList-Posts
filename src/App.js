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

    const style = {
      highlight: {
        color: '#ff00a1',
      },
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Same list component <span style={style.highlight}>reused</span>:</h1>
        </header>

        <div style={{ display:'flex', padding:'10px', border:'1px solid purple' }}>
          <div>
            <List collection={this.state.posts} titleKey="title" imgKey="img" textKey="content" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

