import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import ButtonContainer from './ButtonContainer'
import PigContainer from './PigContainer'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pigs: []
    }
  }

  fetchHogs = () => {
    this.setState({
      pigs: hogs
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <ButtonContainer fetchHogs={this.fetchHogs}/>
          <PigContainer pigs = {this.state.pigs}/>
      </div>
    )
  }
}

export default App;
