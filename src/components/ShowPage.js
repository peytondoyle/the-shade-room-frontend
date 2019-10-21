import React from "react";

class ShowPage extends React.Component {
  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render(){
  	return (
      <div class="container">
  <div class="row">
    <div class="col" id="black">
    <h1>{this.props.selectedQueen.name}</h1>
    <h3>Season {this.props.selectedQueen.season}</h3>
    <p>"{this.props.selectedQueen.quote}"</p>
    <img src={this.props.selectedQueen.image} class="showpage"></img>
    </div>
    <div class="col" id="black">
      <h2>Rate {this.props.selectedQueen.name}</h2>
    </div>
    <div class="col" id="black">
      2 of 2
    </div>
  </div><br></br>
  <div class="row">
    <div class="col" id="stats">
      <h2>Winner?</h2>
        <p>
          {(() => {
            switch (this.props.selectedQueen.winner) {
              case false: return "Nope.";
              case true: return "Yes!";
            }
          })()}
        </p>
    </div>
    <div class="col" id="stats">
      <h2>Place finished?</h2>
        {this.Capitalize(this.props.selectedQueen.place)}
    </div>
    <div class="col" id="stats">
      <h2>Miss Congeniality?</h2>
        <p>
        {(() => {
          switch (this.props.selectedQueen.misscongeniality) {
            case false: return "Nope.";
            case true: return "Yes!";
          }
        })()}
      </p>
    </div>
  </div>
</div>


  	);
  }

};

export default ShowPage;