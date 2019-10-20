import React from "react";


class QueenCard extends React.Component {

  flipSwitch = () => {
  !this.props.seeMore ? this.props.moreInfo(this.props.queen) : this.props.return2Queens(this.props.queen)
  }

  render(){
  	return (
      <div class="col-2">
      <div class="card"
      onClick={this.flipSwitch}>
        <img src={this.props.queen.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <p class="card-text"><p class="queen-name">{this.props.queen.name}<hr></hr>
          <p class="season">Season {this.props.queen.season}</p></p></p>
          </div>
        </div><br></br>
  		</div>
  	);
  }

};

export default QueenCard;
