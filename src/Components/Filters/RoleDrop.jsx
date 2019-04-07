import React, {Component} from 'react'

class RoleDrop extends Component {


  render(){
    return(
      <div>
        <select className='StatDrop' name="" id="" onChange={e => this.props.byRole(e.target.value)}>
          <option value="">Filter By Role</option>
          <option value="offense">Offense</option>
          <option value="support">Support</option>
          <option value="tank">Tank</option>
        </select>
      </div>
    )
  }
}

export default RoleDrop