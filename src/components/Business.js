import React, { Component } from 'react'
import News from './News'
export class Business extends Component {
  render() {
    return (
      <div>
        <News pageSize={this.pageSize} country={"in"} category={"business"} setProgress={this.props.setProgress}/>
      </div>
    )
  }
}

export default Business
