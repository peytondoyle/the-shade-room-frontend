import React from "react";

class LandingPage extends React.Component {
  //your code here

  render(){
  	return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
  	);
  }

};

export default LandingPage;
