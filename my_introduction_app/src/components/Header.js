import React, {Component} from "react";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
           <center><h1> React Header </h1>  <input style={{fontSize: '20px'}} type="text" name="textbox" id="textbox" placeholder=" Search Anything"/> </center>
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