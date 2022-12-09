import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
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

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);

    this.setState({ ideas: filteredIdeas });
  }

  render() {
    return (
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}

export default App;