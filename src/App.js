
import './App.css';
import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {

  // a = 'Shivam';
  render(){
    return (
      <div >
        {/* <h2> Hey {this.a}, This is class component</h2> */}
        <Navbar/>
        <News/>
      </div>
    );
  }
  }



