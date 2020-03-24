import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      content: prevState.content + 1,
    }));
  }

  render() {
    return (
      <div className="App">
        <span className="value">{this.state.content}</span>
        <button id="inc" onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
