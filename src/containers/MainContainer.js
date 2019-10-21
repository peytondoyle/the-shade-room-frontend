import React from "react";
import IndexPage from "./IndexPage.js";
import ShowPage from "../components/ShowPage.js";
import Header from "../components/Header.js"
import LandingPage from "./LandingPage.js";

let URL = "http://localhost:3000/dragqueens"

class MainContainer extends React.Component {

  constructor(props){
    super()
    this.state={
      allQueens: [],
      seeMore: false,
      selectedQueen: null,
      value: 0,
      allUsers: []
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
     allUsers: this.state.allUsers.concat(user)
   })}

  componentDidMount(){
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        data.sort(function(a, b) {return a["name"].localeCompare(b["name"])})
        this.setState({allQueens: data})
    })
  }

  moreInfo = (queen) => {
  this.setState({seeMore: true, selectedQueen: queen})
  }

  return2Queens = (queen) => {
    this.setState({seeMore: false, selectedQueen: queen})
  }

  starChange = (value) => {
    this.setState({value: value})
  }

// sort by season
// data.sort(function(a, b) {return a["name"] - b["name"]})
// this.setState({allQueens: data})

  render(){
  	return (
      <div>
      <LandingPage
      allUsers={this.state.allUsers}
      handleUserFormSubmit={this.handleUserFormSubmit}/>
      <Header
      return2Queens={this.return2Queens}/>
      {this.state.seeMore == false ?
      <IndexPage
      allQueens={this.state.allQueens}
      seeMore={this.state.seeMore}
      moreInfo={this.moreInfo}
      return2Queens={this.return2Queens}
      /> :
      <ShowPage
      allQueens={this.state.allQueens}
      selectedQueen={this.state.selectedQueen}
      value={this.state.value}
      starChange={this.starChange}/>}
      </div>
    );
}
}
export default MainContainer;
