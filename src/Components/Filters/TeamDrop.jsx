import React, {Component} from 'react'

class TeamDrop extends Component {



  render(){
    return(
      <div>
        <select className='StatDrop' name="" id="" onChange={e => this.props.byTeam(e.target.value)}>
          <option value="">Filter by Team</option>
          <option value={'ATL'}>Atlanta Reign</option>
          <option value={'BOS'}>Boston Uprising</option>
          <option value={'CDH'}>Chengdu Hunters</option>
          <option value={'DAL'}>Dallas Fuel</option>
          <option value={'FLA'}>Florida Mayhem</option>
          <option value={'GZC'}>Guangzhou Charge</option>
          <option value={'HOU'}>Houston Outlaws</option>
          <option value={'HZS'}>Hungzhou Spark</option>
          <option value={'LDN'}>London Spitfire</option>
          <option value={'GLA'}>Los Angeles Gladiators</option>
          <option value={'VAL'}>Los Angeles Valiant</option>
          <option value={'NYE'}>New York Excelsior</option>
          <option value={'PAR'}>Paris Eternal</option>
          <option value={'PHI'}>Philidelphia Fusion</option>
          <option value={'SEO'}>Seoul Dynasty</option>
          <option value={'SFS'}>San Fransisco Shock</option>
          <option value={'SHD'}>Shanghai Dragons</option>
          <option value={'TOR'}>Toronto Defiant</option>
          <option value={'VAN'}>Vancouver Titans</option>
          <option value={'WAS'}>Washington Justice</option>
        </select>
      </div>
    )
  }
}

export default TeamDrop