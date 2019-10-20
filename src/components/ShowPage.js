import React from "react";

class ShowPage extends React.Component {
  //your code here

  render(){
  	return (
  	  <div>
      <br></br>
      <h1>{this.props.selectedQueen.name}</h1>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">
            1 of 3
          </div>
          <div class="col-md-auto">
            Variable width content
          </div>
          <div class="col col-lg-2">
            3 of 3
          </div>
        </div>
        
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col-md-auto">
            Variable width content
          </div>
          <div class="col col-lg-2">
            3 of 3
          </div>
        </div>
      </div>
      </div>
  	);
  }

};

export default ShowPage;