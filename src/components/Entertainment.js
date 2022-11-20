import React, { Component } from 'react'
import News from './News'
export class Entertainment extends Component {
  render() {
    return (
      <div>
        <News pageSize={this.pageSize} country={"in"} category={"entertainment"} setProgress={this.props.setProgress}/>
      </div>
    )
  }
}

export default Entertainment
