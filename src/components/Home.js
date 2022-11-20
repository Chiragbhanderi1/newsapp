import React, { Component } from 'react'
import News from './News'
export class Home extends Component {
  render() {
    let {pageSize}=this.props
    return (
      <div>
        <News pageSize={pageSize} country={"in"} category={"general"} setProgress={this.props.setProgress}/>
      </div>
    )
  }
}

export default Home
