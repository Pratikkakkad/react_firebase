import React, { Component } from 'react';
import logo from './logo.svg';
import {database} from './firebase'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={data: null}
  }

  componentDidMount(){
    
    database.ref().on('value',(snapshot) => {
      console.log("new dataa",snapshot)
    })
  }

  render() {
    return (

      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>        
      </header>
      <div>
        <h3>Firebase data will come here...</h3>
      </div>
    </div>
    )
  }
}

