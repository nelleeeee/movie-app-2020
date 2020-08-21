import React from "react";

// 펑션 대신 클래스로 앱 구현
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    // console.log("add");
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    // console.log("minus");
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The Number is:{this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
