import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
// import Display from './Components/Display'
import Functions from './Components/Functions';
import Header from './Components/Styling/Header'
import PlayerFunctions from './Components/PlayerPages/PlayerFunctions'


class App extends Component {
    
  state = {
    showPlayer: false,
    playerToShow: 0,
    stats: [],
    playerIds: []
  }

  componentDidMount() {
    axios.get('https://api.overwatchleague.com/stats/players?season_id=2019').then(res => {
      let stats = res.data.data
      let playerIds = stats.map(player => {
        return {
          name: player.name,
          id: player.playerId
        }
      })
      this.setState({
        stats: stats,
        playerIds: playerIds
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  showTrue = (playerClicked) => {
    let id = (this.state.playerIds.filter(player => player.name === playerClicked))[0].id

    this.setState({
      showPlayer: true,
      playerToShow: id
    })
  }

  showFalse = () => {
    this.setState({
      showPlayer: false
    })
  }


  render() {

    let whatToShow = this.state.showPlayer
    let showStats

    if (whatToShow === false) {
      showStats = <Functions showTrue={this.showTrue}/>
    } else {
      showStats = <PlayerFunctions show={this.state.showPlayer} playerToShow={this.state.playerToShow}
      showFalse={this.showFalse} />
    }

    

    return (
      <div className="App">
        <Header/>
        <div className="ClearBox">
          {showStats}
          
        </div>
        
      </div>
    );
  }
}

export default App;
