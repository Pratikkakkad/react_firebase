import React, { Component } from "react";
import { Button } from "antd";
import { auth, googleAuthProvider } from "../../firebase";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log("Auth Change", currentUser);
      this.setState({
        currentUser
      });
    });
  }

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            auth.signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In
        </Button>
      </div>
    );
  }
}
