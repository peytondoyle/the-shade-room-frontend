import React from "react";


class QueenCard extends React.Component {
  //your code here

  render(){
  	return (
      <div class="col-2">
      <div class="card">
        <img src={this.props.queen.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <p class="card-text">{this.props.queen.name}</p>
          </div>
        </div><br></br>
  		</div>
  	);
  }

};

export default QueenCard;