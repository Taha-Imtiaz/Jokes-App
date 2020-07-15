import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./Joke.css"

const Joke = (props) => {

    var getColor = () => {
    if(votes >= 15) {
        return "#4CAF50"
    }
    else if(votes >= 12) {
        return "#8BC34A"
    }
    else if(votes >= 9) {
        return "#CDDC39"
    }
    else if(votes >= 6) {
        return "#FFEB3B"
    }
    else if(votes >= 3) {
        return "#FFC107"
    }
    else if(votes >= 0) {
        return "#FF9800"
    }
    else {
        return "#f44336"
    }
    }
  var getEmoji = () => {
        if (votes >= 15) {
          return "em em-rolling_on_the_floor_laughing";
        } else if (votes >= 12) {
          return "em em-laughing";
        } else if (votes >= 9) {
          return "em em-smiley";
        } else if (votes >= 6) {
          return "em em-slightly_smiling_face";
        } else if (votes >= 3) {
          return "em em-neutral_face";
        } else if (votes >= 0) {
          return "em em-confused";
        } else {
          return "em em-angry";
        }
      } 
    var {votes ,jokeText,id, handleVote} = props
    // console.log(props)
    return (
        <div className = "Joke">
            <div className="Joke-buttons">
                <FontAwesomeIcon icon = {faArrowUp} size = "1x" onClick = {() => handleVote(id, 1) } style = {{margin: "5px", cursor : "pointer" }}/>
                <span className = "Joke-votes" style = {{borderColor: getColor()}}>{votes}</span>
                <FontAwesomeIcon icon = {faArrowDown} size = "1x" onClick = {() => handleVote(id, -1) } style = {{margin: "5px", cursor : "pointer"}}/>
            </div>
            <div className="Joke-text">
            {jokeText}
            </div>
            <div className="Joke-Emoji">
            <i className={getEmoji()}></i>
            </div>
        </div>
    )
}

export default Joke
