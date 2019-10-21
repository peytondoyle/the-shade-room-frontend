import React from "react";
import NewUserForm from "../components/NewUserForm.js"

class LandingPage extends React.Component {
  //your code here

  render(){
  	return (
      <div>
        <NewUserForm
        handleFormSubmit={this.props.handleFormSubmit}/>
      </div>
  	);
  }

};

export default LandingPage;
