import React, {Component} from 'react'


class ShowTable extends Component {

  
  render(){

    let showPlayer = this.props.stats.map(element => {
      return <tbody key={element.playerId}>
        <td value={element.playerId} className='PlayerName' onClick={e => this.props.showTrue(e.target.innerText)}>{element.name}</td>
        <td>{element.role}</td>
        <td>{element.team}</td>
        <td>{element.hero_damage_avg_per_10m.toLocaleString()}</td>
        <td>{element.eliminations_avg_per_10m.toLocaleString()}</td>
        <td>{element.healing_avg_per_10m.toLocaleString()}</td>
        <td>{((element.time_played_total)/60/60).toLocaleString()} hours</td>
      </tbody>
    })


    return(
      <div>
        <div className="Table">
          <table>
            <tbody className='TableHead'>
              <td>Name</td>
              <td>Role</td>
              <td>Team</td>
              <td>Damage per 10</td>
              <td>Elims per 10</td>
              <td>Healing per 10</td>
              <td>Total Time Played</td>
            </tbody>
            {showPlayer}
          </table>
        </div>
      </div>
    )
  }
}

export default ShowTable