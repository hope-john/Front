import React, { Component } from 'react'
import Header from './Component_Header' 
import Component_Stock from'./Component_Stock'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <br></br>
      <Component_Stock/>
      </div>
    )
  }
}
