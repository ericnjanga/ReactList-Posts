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
          <h1 className="App-title">Welcome to React</h1>
        </header>
       

        <List collection={this.state.posts} textKey='content' titleKey='title' />
      </div>
    );
  }
}

export default App;

