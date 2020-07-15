import React, { Component } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { v4 as uuidv4 } from "uuid";
import "./JokeList.css";
import Joke from "../Joke/Joke";


class JokeList extends Component {
  state = {
    jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
    
  };
  static defaultProps = {
    numJokesToGet: 10,
  };

  componentDidMount = () => {
    var { jokes } = this.state;
   
    if (jokes.length === 0) {
        this.getJokes()
    }
  };

  getJokes = async () => {
    var jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
     //Load Jokes
        var response = await axios.get("https://icanhazdadjoke.com/", {
        //accept json format
        headers: { Accept: "application/json" },
      });
      jokes.push({ jokeText: response.data.joke, votes: 0, id: uuidv4() });
    }
    this.setState((prevState) => ({
        jokes : [...prevState.jokes, ...jokes],
        
    }),
    () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
   
  };

  handleVote = (id, delta) => {
    this.setState((prevState) => ({
      jokes: prevState.jokes.map((joke) =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
      ),
    }), () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)) 
    );
  };
  
  render() {
    var { jokes} = this.state;
    var sortedJokes = jokes.sort((a,b) => b.votes - a.votes)
    // console.log(sortedJokes)
    return (
      <div className="JokeList">
        <Sidebar getJokes = {this.getJokes} />
        <div className="JokeList-jokes">
          {sortedJokes.map((j) => (
            <Joke
              votes={j.votes}
              jokeText={j.jokeText}
              key={j.id}
              id={j.id}
              handleVote={this.handleVote}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
