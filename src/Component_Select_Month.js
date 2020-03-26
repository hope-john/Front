import React, { Component } from 'react'
import './App.css'

export default class Component_Select_Month extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '3 Months'};
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your Predict Result : ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <form className = 'Result' onSubmit={this.handleSubmit}>
            <label >
              Pick Months To Predict 
              <br></br>
              <select  value={this.state.value} onChange={this.handleChange}>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="9 Months">9 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
   
