import React, { Component } from 'react'
import Header from './Component_Header' 
import Component_Stock from'./Component_Stock'
import Component_Select_Month from'./Component_Select_Month'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <br></br>
      <Component_Stock/>
      <br></br>
      <Component_Select_Month/>
      </div>
    )
  }
}
