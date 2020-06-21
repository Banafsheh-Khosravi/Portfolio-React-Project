import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    //to invoke the constructor of the parent component class
    super()
    this.state = { displayBio: false };
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }


  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }


  render() {

    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Bani. I am a software developer.</p>
        <p>I am always looking forward to working on chalenging projects.</p>

        {
          this.state.displayBio ? (
            <div>
              <p>I live in Boston, and I code every day.</p>
              <p>My favorite language is JavaScript.</p>
              <p>Beside coding, I also love drawing!</p>
              <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
          ) : (
              <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
              </div>
            )
        }
      </div>
    )
  }
}
export default App;
