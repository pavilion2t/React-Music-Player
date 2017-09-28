import React, { Component } from 'react';
import Header from './components/header.js';
import Progress from './components/progress.js';
//jPlayer的API文档 http://www.jplayer.cn/developer-guide.html

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      progress: "-",
    }
  }

  componentDidMount(){

}

  render() {
    return (
      <div className="App">
        <Header/>
        <Progress progress = "1">
        </Progress>
      </div>
    );
  }
}

export default App;
