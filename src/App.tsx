import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Welcome></Welcome>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
    }
    this.Count = this.Count.bind(this);
  }
  Count() {
    let count2 = this.state.count;
    this.setState({
      count: count2 + 1,
    });
  }
  render() {
    return (
      <div>
        <label>
          Count:{this.state.count}
        </label>
        <input type="submit" value="Count" onClick={this.Count} />
      </div>
    );
  }
}

export default App;
