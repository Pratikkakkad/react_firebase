import React, { Component } from "react";
import logo from "./logo.svg";
import { database } from "./firebase";
import "./App.css";
import "antd/dist/antd.css";
import Main from "./components/Main";
import HeaderMenu from "./components/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.dataRef = null;
  }

  // componentDidMount() {
  //   this.dataRef = database.ref("/users");
  //   this.dataRef.on("value", snapshot => {
  //     console.log("new dataa", snapshot.val());
  //   });

  //   this.dataRef.push({ name: "Pratikk" });
  // }

  render() {
    return (
      <div className="App">
            <HeaderMenu/>

        <div>
          <h3>Firebase data will come here...</h3>
        </div>
      </div>
    );
  }
}
