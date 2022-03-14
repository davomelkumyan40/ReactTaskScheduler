import React from 'react';
import './App.css';
import Scheduler from "./Components/Scheduler";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: [],
      taskText: "",
    };
  }
  render() {
    return (
      <div className="App" >
        <Scheduler state={this.state} />
      </div>
    );
  }
}

export default App;
