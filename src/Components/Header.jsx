import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Leave Approval System</span>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

//  <li class="nav-item">
//   <a class="nav-link" href="#">
//     User
//   </a>
// </li>
