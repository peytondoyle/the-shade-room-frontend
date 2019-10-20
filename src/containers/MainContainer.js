import React from "react";
import IndexPage from "./IndexPage.js";
import ShowPage from "../components/ShowPage.js";
import Header from "../components/Header.js"

let URL = "http://localhost:3000/dragqueens"

class MainContainer extends React.Component {

  constructor(){
    super()
    this.state={
      allQueens: [],
      seeMore: false,
      selectedQueen: null
    }
  }

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

// sort by season
// data.sort(function(a, b) {return a["name"] - b["name"]})
// this.setState({allQueens: data})

  render(){
  	return (
      <div>
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
      selectedQueen={this.state.selectedQueen}/>}
      </div>
    );
}
}
export default MainContainer;
