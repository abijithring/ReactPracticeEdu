import React, {Component} from "react";
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define any state variables here if needed
      title: "My React Header"
    };
  }
  render() {
    return (
      <div>
        <header className="header">
          
           <center><h1> React Header </h1>  <input style={{fontSize: '20px'}} type="text" name="textbox" id="textbox" placeholder=" Search Anything"/> <div>{this.state.title}</div> </center>
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