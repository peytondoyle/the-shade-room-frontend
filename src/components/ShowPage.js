import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';

class ShowPage extends React.Component {
  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }



  render(){
  	return (

      <div class="container">
  <div class="row">
    <div class="col">
    <h1>{this.props.selectedQueen.name}</h1>
    <h3>Season {this.props.selectedQueen.season}</h3>
    <p>"{this.props.selectedQueen.quote}"</p>
    <img src={this.props.selectedQueen.image} class="showpage"></img>
    </div>
    <div class="col" id="moreinfo">
      <h3>Winner?</h3>
      <p>
        {(() => {
          switch (this.props.selectedQueen.winner) {
            case false: return "Nope.";
            case true: return "Yes!";
          }
        })()}
      </p>
      <h3>Place finished?</h3>
        <p>{this.Capitalize(this.props.selectedQueen.place)} out of {}</p>
      <h3>Miss Congeniality?</h3>
      <p>
        {(() => {
          switch (this.props.selectedQueen.misscongeniality) {
            case false: return "Nope.";
            case true: return "Yes!";
          }
        })()}
      </p>
      <h3>Spill the tea</h3>
    </div>
    <div class="col" id="moreinfo">
      <h3>How is she though?</h3><br></br>
      <BeautyStars
      value={this.props.value}
      onChange={this.props.starChange}
      />
      <h4>Average rating: {this.props.value}</h4><br></br>
      <BeautyStars
      value={this.props.value}
      onChange={this.props.starChange}
      />
      <h4>Your rating</h4>
      </div>
    </div>
</div>




  	);
  }

};

export default ShowPage;