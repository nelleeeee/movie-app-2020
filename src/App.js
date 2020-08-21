import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

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
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); // movies: movies 랑 같은 표현
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
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
