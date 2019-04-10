import React, {Component} from 'react'
import HeroDetails from './HeroDetails'
import axios from 'axios'


class HeroStats extends Component {

  state = {
    heroStats: []
  }

  componentDidMount() {
    axios.get(`https://api.overwatchleague.com/players/${this.props.playerToShow}?locale=en-us&season=${this.props.season}&stage_id=regular_season&expand=stats,stat.ranks`).then(res => {
      let showPlayer = res.data.data
      
      
      this.setState({
        heroStats: showPlayer.stats.heroes,
      })
    })
  }

  showDetails = (hero) => {
    console.log(hero)
  }


  render(){ 
    
    let showStats = this.state.heroStats.sort((a,b) => (a.stats.time_played_total < b.stats.time_played_total) ? 1 : ((b.stats.time_played_total < a.stats.time_played_total) ? -1 : 0)).map(hero => {
      return <div value={hero.name} className='HeroStats' onClick={e => this.showDetails(hero.name)}>
      {hero.name}
      </div>
    })

    return(
      <div>
        {showStats}
      </div>
    )
  }
}

export default HeroStats