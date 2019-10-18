import React from "react";
import IndexPage from "./IndexPage.js";
import ShowPage from "../components/ShowPage.js";

let URL = "http://localhost:3000/dragqueens"

class MainContainer extends React.Component {

  constructor(){
    super()
    this.state={
      allQueens: [],
      sortedQueens: []
    }
  }

  componentDidMount(){

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        // debugger
        data.sort(function(a, b) {return a["name"].localeCompare(b["name"])})
        this.setState({allQueens: data})
    })
  }

// sort by season
// data.sort(function(a, b) {return a["name"] - b["name"]})
// this.setState({allQueens: data})

  render(){
  	return (
      <div>
      <IndexPage
      // sortQueens={this.sortQueens}
      allQueens={this.state.allQueens}/>
      <ShowPage />
      </div>
    );
}
}
export default MainContainer;
