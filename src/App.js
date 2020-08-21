import React from "react";
import axios from "axios";

// 펑션 대신 클래스로 앱 구현
class App extends React.Component {
  // state = {
  //   count: 0,
  // };
  state = {
    isLoading: true,
    movies: [],
  };

  // add = () => {
  //   // console.log("add");
  //   this.setState((current) => ({ count: current.count + 1 }));
  // };

  // minus = () => {
  //   // console.log("minus");
  //   this.setState((current) => ({ count: current.count - 1 }));
  // };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);
    this.getMovies();
  }

  // componentDidUpdate() {
  //   console.log("I just updated");
  // }

  render() {
    // console.log("I'm rendering");
    // return (
    //   <div>
    //     <h1>The Number is:{this.state.count}</h1>
    //     <button onClick={this.add}>add</button>
    //     <button onClick={this.minus}>minus</button>
    //   </div>
    // );
    const { isLoading } = this.state;
    return <div>{isLoading ? "loading..." : "ready"}</div>;
  }
}

export default App;
