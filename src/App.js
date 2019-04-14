import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import 'tachyons';
import SearchBox from './SearchBox';

class App extends Component {

  constructor() {
    super();
    this.state = {
      players: [],
      searchfield: '',
    };
  }

  onChangeSearch = (event) => {
    this.setState({searchfield: event.target.value});
  }

  componentDidMount() {
    fetch('http://localhost:8000/players')
      .then(response => response.json())
      .then(players => {
        this.setState({players: players});
      });
  }

  render() {
    const filteredPlayers = this.state.players.filter(player => {
        return player.name.toLowerCase().includes(
          this.state.searchfield.toLowerCase()
      ); 
    });

    return (
      <div className="App">
        <h1>Baseball Legends</h1>
        <p>Click image and hold to view player's biography.</p>
        <SearchBox changeSearch={this.onChangeSearch} />
        <CardList players={filteredPlayers} />
      </div>
    );
  }
}

export default App;
