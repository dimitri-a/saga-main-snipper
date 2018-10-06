
import React, { Component } from 'react'

class Users extends Component {

  handleChange = () => {
    this.props.getData(this.input.value)
  }

  render() {
    const {text } = this.props;
    return (
      <div>
        <input type="text" onChange={this.handleChange} ref={element => this.input = element}></input>
        {text}
      </div>
    )
  }
}

export default Users