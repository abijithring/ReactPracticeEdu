import React, { Component } from 'react';
import './App.css';
import JSON from './components/Db.json';
import Counter from './components/Counter';
import NewsList from './components/NewsList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: JSON
    };
  }
  render(){
    return (
      console.log(this.state.news),
      <div className="App">
        <header className="App-header">
          <NewsList newlistData = {this.state.news}>  </NewsList>
        </header>
        <Counter />
      </div>
    );
  }
 
}

export default App;
