import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  handleClick = () => {
    var { getJokes } = this.props;

    getJokes();
  };
  render() {
    return (
      <div className="JokeList-sidebar">
        <h1 className="JokeList-title">
          <span>Dad</span> Jokes
        </h1>
        <img
          src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
          alt=""
        />
        <button className="get-more-jokes" onClick={this.handleClick}>
          New Joke
        </button>
      </div>
    );
  }
}

export default Sidebar;
