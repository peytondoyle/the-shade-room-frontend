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


class MainContainer extends React.Component {

  constructor(){
    super()
    this.state={
      allQueens: [],
      seeMore: false,
      selectedQueen: null,
      seasonFilter: 0,
      // yourValue: 0,
      avgValue: 4,
      allUsers: [],
      currentUserId: 0,
      allRatings: []
    }
  }

  // FETCHING QUEENS
  // FETCHING RATINGS
  componentDidMount(){
    fetch(DRAGURL)
    .then(res => res.json())
    .then(data => {
      data.sort(function(a, b) {return a["name"].localeCompare(b["name"])})
      this.setState({allQueens: data, seasonFilter: 0})
    })
  }

  filterBySeason = (e) => {
    let allQueens = this.state.allqueens
    let seasonFilter = this.state.seasonFilter
    let select = e.target.text
    // debugger
    if (select == "Season 1") {
      console.log("I wanna see S1 queens!")
    } else if (seasonFilter == 2) {
      console.log("I wanna see S2 queens!")
    } else if (seasonFilter == 3) {
      console.log("I wanna see S3 queens!")
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
    fetch(`http://localhost:3000/users/${user["id"]}/ratings`)
    .then(res => res.json())
    .then(data => {
      this.setState({
      allRatings: data,
      allUsers: this.state.allUsers.concat(user),
      currentUserId: user["id"]})
      // console.log(data)
    })
  }

  moreInfo = (queen) => {
  this.setState({seeMore: true, selectedQueen: queen})
  }

  return2Queens = (queen) => {
    this.setState({seeMore: false, selectedQueen: queen})
  }

  sashayAway = () => {
    this.setState({currentUserId: 0, seeMore: false})
  }

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
                return2Queens={this.return2Queens}
                sashayAway={this.sashayAway}
                />
                {
                  this.state.seeMore == false ?
                  <IndexPage
                  allQueens={this.state.allQueens}
                  seeMore={this.state.seeMore}
                  moreInfo={this.moreInfo}
                  return2Queens={this.return2Queens}
                  seasonFilter={this.state.seasonFilter}
                  filterBySeason={this.filterBySeason}
                  /> :
                  <ShowPage
                  allQueens={this.state.allQueens}
                  selectedQueen={this.state.selectedQueen}
                  allRatings={this.state.allRatings}
                  currentUserId={this.state.currentUserId}
                  // avgValue={this.state.avgValue}
                  // avgStarChange={this.avgStarChange}
                  // yourStarChange={this.yourStarChange}
                  // handleStarChange={this.handleStarChange}
                  // settingStars={this.settingStars()}
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