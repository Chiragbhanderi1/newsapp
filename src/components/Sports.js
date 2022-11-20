import React, { Component } from 'react'
import News from './News'
export class Sports extends Component {
  render() {
    return (
      <div>
        <News pageSize={this.pageSize} country={"in"} category={"sports"} setProgress={this.props.setProgress}/>
      </div>
    )
  }
}

export default Sports
