import React from "react";
import IndexPage from "./IndexPage.js";
import ShowPage from "../components/ShowPage.js";
import Header from "../components/Header.js"
import LandingPage from "./LandingPage.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

let DRAGURL = "http://localhost:3000/dragqueens"
let RATINGSURL = "http://localhost:3000/ratings"

class MainContainer extends React.Component {

  constructor(){
    super()
    this.state={
      allQueens: [],
      seeMore: false,
      selectedQueen: null,
      yourValue: 0,
      avgValue: 4,
      allUsers: [],
      currentUserId: 0,
      allRatings: []
    }
  }

  handleUserFormSubmit = (event) => {
    let name = event.target.parentElement.firstElementChild.value
    let body = JSON.stringify({user: {name: name} })
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: body,})
    .then((response) => {return response.json()})
    .then((user) => {
      this.addNewUser(user)})}

  addNewUser = (user) => {
    this.setState({
    allUsers: this.state.allUsers.concat(user),
    currentUserId: user["id"]})}

  yourStarChange = (value) => {
    this.setState({yourValue: value})
    this.handleStarChange(value)
  }

  handleStarChange = (value) => {
    let currentUser = this.state.currentUserId
    let currentQueen = this.state.selectedQueen["id"]
    let body = JSON.stringify({rating: {rating: value, user_id: currentUser, dragqueen_id: currentQueen} })
    fetch('http://localhost:3000/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: body,})
    .then((response) => {return response.json()})
    .then((rating) => {
      console.log(rating)})
    }

// FETCHING QUEENS
// FETCHING RATINGS
  componentDidMount(){
    fetch(DRAGURL)
      .then(res => res.json())
      .then(data => {
        data.sort(function(a, b) {return a["name"].localeCompare(b["name"])})
        this.setState({allQueens: data})
    })

    fetch(RATINGSURL)
      .then(res => res.json())
      .then(data => {
        this.setState({allRatings: data})
        console.log(data)
    })
  }

// THIS IS NOT WORKING!
  // averageRating = () => {
  //   let allRatings = this.state.allRatings
  //   let selectedQueenId = this.state.selectedQueen.id
  //   let queenRatings = allRatings.map(queen => queen.id === selectedQueenId)
  //   debugger
  //   this.setState({allRatings: queenRatings})
  // }

  // correctQueen = (queen) {
  //   return
  // }

  // sort by season
  // data.sort(function(a, b) {return a["name"] - b["name"]})
  // this.setState({allQueens: data})

//   const inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];
//
// function isCherries(fruit) {
//   return fruit.name === 'cherries';
// }
//
// console.log(inventory.find(isCherries));
// // { name: 'cherries', quantity: 5 }



  moreInfo = (queen) => {
  this.setState({seeMore: true, selectedQueen: queen})
  }

  return2Queens = (queen) => {
    this.setState({seeMore: false, selectedQueen: queen})
  }

  // avgStarChange = (value) => {
  //   this.setState({averageValue: value})
  // }

  render(){
  	return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />

          <Route exact path="/login" render={() => {
            return this.state.currentUserId === 0 ?
            <LandingPage
            currentUserId={this.state.currentUserId}
            allUsers={this.state.allUsers}
            handleUserFormSubmit={this.handleUserFormSubmit}/> :
            <Redirect to="/allqueens" />}
          } />

          <Route path="/allqueens" render={() => {
            return this.state.currentUserId !== 0 ?
              <React.Fragment>
                <Header
                return2Queens={this.return2Queens}/>
                {
                  this.state.seeMore == false ?
                  <IndexPage
                  allQueens={this.state.allQueens}
                  seeMore={this.state.seeMore}
                  moreInfo={this.moreInfo}
                  return2Queens={this.return2Queens}
                  /> :
                  <ShowPage
                  allQueens={this.state.allQueens}
                  selectedQueen={this.state.selectedQueen}
                  yourValue={this.state.yourValue}
                  avgValue={this.state.avgValue}
                  avgStarChange={this.avgStarChange}
                  yourStarChange={this.yourStarChange}
                  allRatings={this.state.allRatings}
                  handleStarChange={this.handleStarChange}
                  />
                }
              </React.Fragment>
              :
            <Redirect to="/login" />}}/>
        </Switch>
      </div>
    </Router>
    );
}
}
export default MainContainer;

// WORKING RETURN
// <div>
// <LandingPage
// allUsers={this.state.allUsers}
// handleUserFormSubmit={this.handleUserFormSubmit}/>
// <Header
// return2Queens={this.return2Queens}/>
// {this.state.seeMore == false ?
// <IndexPage
// allQueens={this.state.allQueens}
// seeMore={this.state.seeMore}
// moreInfo={this.moreInfo}
// return2Queens={this.return2Queens}
// /> :
// <ShowPage
// allQueens={this.state.allQueens}
// selectedQueen={this.state.selectedQueen}
// yourValue={this.state.yourValue}
// avgValue={this.state.avgValue}
// avgStarChange={this.avgStarChange}
// yourStarChange={this.yourStarChange}
// allRatings={this.state.allRatings}
// handleStarChange={this.handleStarChange}/>}
// </div>