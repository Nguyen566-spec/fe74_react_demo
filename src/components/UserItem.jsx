import React, { Component } from 'react'

export default class UserItem extends Component {
  render() {
    const {name, age} = this.props.user;
    return (
      <div>
        <h1 className='bg-primary'>Name: {name}</h1>
        <h2>Age: {age}</h2>
      </div>
    )
  }
}
