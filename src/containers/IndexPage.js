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
        </div>
        <div class="col col-lg-4" id="indexbuttongroup">

        </div>
        <div class="col-md-auto" id="indexbuttongroup">
          <button type="button" class="btn btn-primary"
          id="indexbuttons">View Random Queen</button>
        </div>

        <div class="col col-lg-1" id="seasonfilter">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter by Season
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Season 1</a>
                <a class="dropdown-item" href="#">Season 2</a>
                <a class="dropdown-item" href="#">Season 3</a>
                <a class="dropdown-item" href="#">Season 4</a>
                <a class="dropdown-item" href="#">Season 5</a>
                <a class="dropdown-item" href="#">Season 6</a>
                <a class="dropdown-item" href="#">Season 7</a>
                <a class="dropdown-item" href="#">Season 8</a>
                <a class="dropdown-item" href="#">Season 9</a>
                <a class="dropdown-item" href="#">Season 10</a>
                <a class="dropdown-item" href="#">Season 11</a>
              </div>
            </div>
          </div>

          <div class="col col-lg-1" id="traitfilter">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter by Trait
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>

          <div class="col col-lg-1" id="sortfilter">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Name</a>
                <a class="dropdown-item" href="#">Season</a>
              </div>
            </div>
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