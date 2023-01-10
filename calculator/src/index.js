import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { add, mul, sub, divi } from "./Cal.jsx";

ReactDOM.render(
<>
  <ul>
    <li> The Addition is {add(10,4)}</li>
    <li> The substraction is {sub(10, 5)}</li>
    <li> The multiplication is {mul(10,2)} </li>
    <li> The division is {divi(40,3)} </li>
  </ul>
</>
  , document.getElementById("root"));
