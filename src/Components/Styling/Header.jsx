import React, {Component} from 'react'


class Header extends Component {


  render(){
    return(
      <div className="Header">
        <img className='Logo' src="https://nerdcaster.com/wp-content/uploads/2018/04/OWL-Logo-Dark.jpg" alt="OWL Logo"/>
        <h1 className='HeaderText'>Overwatch League Stat Lookup</h1>
      </div>
    )
  }
}

export default Header
