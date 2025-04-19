import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define any state variables here if needed
      title: "Natural organic farming and nursery pvt ltd"
    };
  }
  inputChange(event) {
    console.log(event.target.value);
    this.setState({ keyword: event.target.value });
  }
  render() {
    return (
      <div>
        <header className="header">

          <center>
            <h1>{this.state.title}</h1>            
          </center>
        </header>
      </div>

    );
  }
}
/* //Functional component Header
const Header = () => {
  return (
    <header>
      <h1>Header of the Page</h1>
    </header>
  );
} */
export default Header;