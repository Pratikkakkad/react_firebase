import React, { Component } from "react";
import { Button, Avatar, Popover } from "antd";
import { auth, googleAuthProvider } from "../../firebase";
import MyProfile from "../MyProfile";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentUser } = this.props;

    const content = (
      <div>
        <div style={{ cursor: "pointer" }} onClick={() => auth.signOut()}>
          Sign Out
        </div>
      </div>
    );

    return (
      <div>
        {!currentUser && (
          <Button
            type="primary"
            onClick={() => {
              auth.signInWithPopup(googleAuthProvider);
            }}
          >
            Sign In
          </Button>
        )}

        {currentUser && (
          <Popover content={content} title={null} trigger="click">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <Avatar src={currentUser.photoURL} />
              <div style={{ marginLeft: "8px" }}>{currentUser.displayName}</div>
            </div>
          </Popover>
        )}
      </div>
    );
  }
}
