import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//import Button
import MyButton from "./components/Button.jsx";
let msg = (
  <h1 style={{ border: "2px solid", padding: "10px" }}>Welcome to React</h1>
);
let link = <a href="#"> Click here for more </a>;
let arr = [<span>One </span>, <span> Two </span>, <span> Three</span>];
let counter = <div> Clicked a total of {MyButton.counter} times </div>;
function App() {
  return (
    <Fragment>
      <div className="App">
        {msg}
        {arr[0]}
        {arr[1]}
        {arr[2]}
        {counter}
        <MyButton color="limegreen" />
        <MyButton color="hotpink" />
        <MyButton color="azure" />

        {link}
      </div>
    </Fragment>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
