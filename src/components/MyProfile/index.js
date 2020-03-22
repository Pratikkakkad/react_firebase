import React, { Component } from "react";
import MainLayout from "../Layout";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { currentUser } = this.props;
    return (
      <MainLayout>
        <div>Children component</div>
      </MainLayout>
    );
  }
}
