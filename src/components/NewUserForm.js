import React from "react";

class NewUserForm extends React.Component {
  //your code here

  render() {
    return (
        <div>
          <center>
          <input ref='name' size="40" placeholder='please enter your username' />
          <br></br>
          <button type="button" class="btn-sample"
          onClick={this.props.handleUserFormSubmit}>Submit</button>
          </center>
        </div>
        )}};

export default NewUserForm;
