import React from "react";
import QueenCard from "../components/QueenCard.js";

class IndexPage extends React.Component {

  render(){
  	return (
      <div>

      <div class="row">
        <div class="col" id="indexpgname">
          <span class="index-header">
              All Drag Queens
          </span>
          <br></br><br></br>

        </div>

      </div>




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