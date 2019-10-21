import React from "react";
import NewUserForm from "../components/NewUserForm.js"

class LandingPage extends React.Component {
  //your code here

  render(){
  	return (
      <div>
        <NewUserForm
        handleUserFormSubmit={this.props.handleUserFormSubmit}/>
      </div>
  	);
  }

};

export default LandingPage;
