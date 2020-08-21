import React from "react";

// 펑션 대신 클래스로 앱 구현
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log("add");
  };

  minus = () => {
    console.log("minus");
  };

  render() {
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
