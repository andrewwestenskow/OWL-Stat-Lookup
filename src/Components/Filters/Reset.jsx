import React,{Component} from 'react'

class Reset extends Component{

  render(){
    return(
      <div>
        <button className='ResetButton' onClick={() => this.props.reset()} >Reset Filters</button>
      </div>
    )
  }
}

export default Reset