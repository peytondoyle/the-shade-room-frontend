import React from "react";

class NewUserForm extends React.Component {
  //your code here

  render() {
    return (
        <div>
          <input ref='name' placeholder='Enter the name of the item' />
          <button onClick={this.props.handleUserFormSubmit}>Submit</button>
        </div>
        )}};

export default NewUserForm;
