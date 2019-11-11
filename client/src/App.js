import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './Components/PlayerCard';
import DarkNav from './Components/DarkNav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [{}]
    }
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/api/players')
        .then(res => {
          console.log(res)
          let newPlayers = res.data;
          this.setState({
            players: newPlayers
          })
        })
  }

  render() {
  return (
    <div className="App" data-test='app-Com'>
      <div>
        <DarkNav />
      </div>
      {this.state.players.map((name, index) => (  
              <PlayerCard className="play-card" player={name} key={index}/>
            ))}
    </div>
  );
  }
}

export default App;
