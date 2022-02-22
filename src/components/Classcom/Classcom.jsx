import React, { Component } from 'react'

export default class Classcom extends Component {
    state={
        age:37,
        userName:'doaaaaaaaaaa'
    }
    wellcom(){
        alert("hi")
    }
  render() {
    return (
        <>
        <div>name:{this.props.useriame}</div>
        <button onClick={this.wellcom} className='btn btn-info my-3'>class</button>
    </>
    )
  }
}
