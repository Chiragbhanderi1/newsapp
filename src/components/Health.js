import React, { Component } from 'react'
import News from './News'
export class Health extends Component {
  render() {
    return (
      <div>
        <News pageSize={this.pageSize} country={"in"} category={"health"} setProgress={this.props.setProgress}/>
      </div>
    )
  }
}

export default Health
