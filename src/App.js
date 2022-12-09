import React, { Component } from 'react';
import Ideas from './Ideas';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        { id: 1, title: 'Run', description: 'Go on a 30 minute run' },
        { id: 2, title: 'Clean', description: 'Your room is filthy' },
        { id: 3, title: 'Meditate', description: 'Take a chill pill' },
        { id: 4, title: 'Dentist', description: 'Get your teeth cleaned' },
        { id: 5, title: 'Climb', description: 'Buy a climbing harness' },
        { id: 6, title: 'React', description: 'Make an app with React' },
      ]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Idea Box</h1>
        <Ideas ideas={this.state.ideas} />
      </main>
    )
  }
}

export default App;