import React from "react";
import QueenCard from "../components/QueenCard.js";

class IndexPage extends React.Component {
  //your code here

  render(){
  	return (
  	  <div>
      <div class="row">
        {this.props.sortedQueens.map(queen => <QueenCard
        queen={queen}/>)}
      </div>
  		</div>
  	);
  }

};

export default IndexPage;