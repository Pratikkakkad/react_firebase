import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import MainLayout from "./components/Layout";

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
        <MainLayout />
      </div>
    );
  }
}
