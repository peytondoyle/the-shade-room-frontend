import React from "react";
import IndexPage from "./IndexPage.js";
import ShowPage from "../components/ShowPage.js";

let URL = "http://localhost:3000/dragqueens"

class MainContainer extends React.Component {

  constructor(){
    super()
    this.state={
      allQueens: []
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({allQueens: data})
        console.log(this.state.allQueens)
    })
  }

  render(){
  	return (
      <div>
      <IndexPage
      allQueens={this.state.allQueens}/>
      <ShowPage />
      </div>
    );
}
}
export default MainContainer;
