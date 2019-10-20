import React from "react";
import QueenCard from "../components/QueenCard.js";

class IndexPage extends React.Component {

  render(){
  	return (
      <div>
      <span class="index-header">
          All Drag Queens
      </span>

      <div class="row">
        {this.props.allQueens.map(queen => <QueenCard
        queen={queen}
        seeMore={this.props.seeMore}
        moreInfo={this.props.moreInfo}
        return2Queens={this.props.return2Queens}/>)}
      </div>
  		</div>
  	);
  }

};

export default IndexPage;