import React, {Component} from 'react'
import HeroDetails from './HeroDetails'


class HeroStats extends Component {

  render(){

    // let showHeroes = this.props.heroStats.map(hero => {
    //   return <HeroDetails 
    //   key={hero.hero_id}
    //   heroName={hero.name}
    //   heroStats={hero.stats}/>
    // })

    return(
      <div>
        {/* {showHeroes} */}asdfasdfasdf
        <HeroDetails/>
      </div>
    )
  }
}

export default HeroStats