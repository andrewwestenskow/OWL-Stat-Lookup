import React, {Component} from 'react'
import ShowTable from './ShowTable'
import TeamDrop from './Filters/TeamDrop'
import Reset from './Filters/Reset'
import RoleDrop from './Filters/RoleDrop'


class Display extends Component {



  render(){

    


    return(
      <div>
        <div className="TableHeader">2019 Season Stats</div>
        <div className="Filters">
        <TeamDrop byTeam={this.props.byTeam}/>
        <RoleDrop byRole={this.props.byRole}/>
        <Reset reset={this.props.reset}/>
        </div>
        <ShowTable stats={this.props.stats}
        showTrue={this.props.showTrue}/>
      </div>
    )
  }
}

export default Display