import React from "react";
import "./Navigation.scss";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
  <>
  <div className="navbar">
  <h1>Esmee's Gratitude Journal</h1>
  <ul>
        <li>
   <Link to="/notelist">Previous entries</Link>
        </li>
        <li>
    <Link to="/createnote">+</Link>
        </li>
        </ul>
  </div>
  </>
)};

export default Navigation;
