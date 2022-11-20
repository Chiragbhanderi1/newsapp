import React, { Component } from 'react'
import News from './News'
export class Science extends Component {
  render() {
    return (
      <div>
        <News pageSize={this.pageSize} country={"in"} category={"science"} setProgress={this.props.setProgress}/>
      </div>
    )
  }
}

export default Science
