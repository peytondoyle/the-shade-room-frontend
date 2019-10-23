import React from "react";
import NewUserForm from "../components/NewUserForm.js"

class LandingPage extends React.Component {
  //your code here

  render(){
  	return (
      <div class="landingpage">
        <center>
        <h7>The Shade Room</h7><br></br>
        <img src="https://i.ibb.co/1GR388q/test.png" class="landingpageimg"></img>
        </center>
        <NewUserForm
        handleUserFormSubmit={this.props.handleUserFormSubmit}/>
      </div>
  	);
  }

};

export default LandingPage;
