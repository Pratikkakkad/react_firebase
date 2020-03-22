import React, { Component } from "react";
import { Menu } from "antd";
import Signin from "../Signin";
// import { auth } from "../../firebase";

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail"
    };
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "32px",
              color: "#fff"
            }}
          >
            Firebase React
          </div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="dark"
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="mail">One</Menu.Item>
            <Menu.Item key="app">Two</Menu.Item>
            {currentUser && <Menu.Item key="profile">My Profile</Menu.Item>}
          </Menu>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0 16px",
            color: "#fff"
          }}
        >
          <Signin currentUser={currentUser} />
        </div>
      </div>
    );
  }
}
