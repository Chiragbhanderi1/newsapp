import React, { Component } from 'react'
import News from './News'
export class Technology extends Component {
  render() {
    return (
      <div>
        <News pageSize={this.pageSize} country={"in"} category={"technology"} setProgress={this.props.setProgress}/>
      </div>
    )
  }
}

export default Technology
