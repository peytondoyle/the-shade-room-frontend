import React from "react";

class Header extends React.Component {
  //your code here

  render(){
  	return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="https://i.ibb.co/1GR388q/test.png" class="navbar-brand" id="navbarimg"></img><span class="index-header-navbar">
          The Shade Room
      </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
          </ul>
          <span class="navbar-text">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"
              onClick={this.props.return2Queens}>All Queens</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="http://google.com">Sashay Away</a>
            </li>
          </ul>
          </span>
        </div>
      </nav>

  	);
  }

};

export default Header;
