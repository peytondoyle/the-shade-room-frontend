import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';

class ShowPage extends React.Component {

  constructor(){
    super()
    this.state={
      yourRating: 0,
      avgValue: 0
  }}

  componentDidMount(){
    fetch(`http://localhost:3000/dragqueens/${this.props.selectedQueen.id}/ratings`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.pullingQueenRatings(data)
        this.settingYourStars(data)
  })}

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  yourStarChange = (value) => {
    // this.setState({yourStars: value})
    this.handleStarChange(value)
  }

  handleStarChange = (value) => {
    let currentUser = this.props.currentUserId
    let currentQueen = this.props.selectedQueen.id
    // let yourRating = this.state.yourRating
    let body = JSON.stringify({rating: value, user_id: currentUser, dragqueen_id: currentQueen})
    this.state.yourRating ?
    fetch(`http://localhost:3000/ratings/${this.state.yourRating.id}/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body: body
      })
        .then((response) => {return response.json()})
        .then((rating) => {
          console.log("patch", rating)
          this.setState({yourRating: rating})})
    :
    fetch('http://localhost:3000/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
        body: body})
        .then((response) => {return response.json()})
        .then((rating) => {
          console.log("post", rating)
          this.setState({yourRating: rating})})
    }

    addEmUp = (data) => {
      return data.reduce(function(accum, currentVal){
        return accum + currentVal.rating}, 0)
    }

    pullingQueenRatings = (array) => {
      let preDiv = this.addEmUp(array)
      let arrayLength = array.length
      let sum = preDiv / arrayLength
      let dirtyDecimal = Math.round(sum * 100) / 100
      this.roundingRatings(dirtyDecimal)
        }

    settingYourStars = (array) => {
      // let queen = this.props.selectedQueen["id"]
      let currentUserId = this.props.currentUserId
      if (this.props.selectedQueen) {
        let filteredRatings = array.filter(rating => rating["user_id"] === currentUserId)
        console.log("setting stars", filteredRatings)
        let rating = filteredRatings[0]
        // let stars = filteredRatings[0].rating
        this.setState({yourRating: rating})
      }
    }

    roundingRatings = (sum) => {
      if (sum >= 5) {
        this.setState({avgValue: 5})
      } else if (sum <= 1 && sum > 0) {
        this.setState({avgValue: 1})
      } else if (sum === 0) {
        this.setState({avgValue: 0})
      } else {
        this.setState({avgValue: sum})
      }
    }



  render(){
  	return (

      <div class="container">
  <div class="row">
    <div class="col">
    <h1>{this.props.selectedQueen.name}</h1>
    <h3>Season {this.props.selectedQueen.season}</h3>
    <h4>"{this.props.selectedQueen.quote}"</h4>
    <img src={this.props.selectedQueen.image} class="showpage"></img><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
    <div class="col" id="moreinfo">
      <h3>Winner?</h3>
      <h4>
        {(() => {
          switch (this.props.selectedQueen.winner) {
            case false: return "Nope.";
            case true: return "Yes!";
          }
        })()}
      </h4>
      <h3>Place finished?</h3>
        <h4>{this.Capitalize(this.props.selectedQueen.place)}.</h4>
      <h3>Miss Congeniality?</h3>
      <h4>
        {(() => {
          switch (this.props.selectedQueen.misscongeniality) {
            case false: return "Nope.";
            case true: return "Yes!";
          }
        })()}
      </h4>
    </div>
    <div class="col" id="moreinfo">
      <h3>How is she though?</h3><br></br>
      <BeautyStars
      value={this.state.avgValue}
      />
      <h4>Average rating: {this.state.avgValue ? this.state.avgValue : "0"}</h4><br></br>
      <BeautyStars
      value={this.state.yourRating && this.state.yourRating.rating}
      onChange={this.yourStarChange}
      />
      <h4>Your rating</h4>
      </div>
    </div>
</div>

  	);
  }

};

export default ShowPage;