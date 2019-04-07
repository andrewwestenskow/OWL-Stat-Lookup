import React, {Component} from 'react'
import Display from './Display'
import axios from 'axios'



class Functions extends Component {

  state = {
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

  

  filterByTeam = (team) =>{
    axios.get('https://api.overwatchleague.com/stats/players?season_id=2019').then(res => {
      let stats = res.data.data
      let showTeam = stats.filter(player => { return player.team === team})
      this.setState({
        stats: showTeam
      })
  })
}
  
  filterByRole = (role) =>{
    axios.get('https://api.overwatchleague.com/stats/players?season_id=2019').then(res => {
      let stats = res.data.data
      let showRole = stats.filter(player => { return player.role === role})
      this.setState({
        stats: showRole
      })
  })
  }

  resetFilters = () => {
    axios.get('https://api.overwatchleague.com/stats/players?season_id=2019').then(res => {
      let stats = res.data.data
      this.setState({
        stats: stats
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return(

      <Display 
      stats={this.state.stats} 
      byTeam={this.filterByTeam}
      reset={this.resetFilters}
      byRole={this.filterByRole}
      showTrue={this.props.showTrue}
      />
    )
  }
}

export default Functions