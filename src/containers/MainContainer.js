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
        this.setState({allQueens: data})
        console.log(this.state.allQueens)
        debugger
        let originalQueens = this.state.allQueens
        let newQueens = [...originalQueens]
        let sortedQueens = newQueens.sort(this.state.allQueens.name)
        this.setState({sortedQueens: sortedQueens})
    })
  }

  sortQueens = () => {
  }

  render(){
  	return (
      <div>
      <IndexPage
      sortedQueens={this.state.sortedQueens}/>
      <ShowPage />
      </div>
    );
}
}
export default MainContainer;
