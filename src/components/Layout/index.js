import React, { Component } from "react";
import HeaderMenu from "../Header";
import { Layout } from "antd";
import { auth, database } from "../../firebase";
import Main from "../Main";

const { Header, Content } = Layout;

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null, restaurants: null };

    this.restaurantsRef = database.ref("/restaurants");
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log("current", currentUser);
      this.setState({
        currentUser
      });

      this.restaurantsRef.on("value", snapshot => {
        this.setState({
          restaurants: snapshot.val()
        });
      });
    });
  }

  render() {
    const { currentUser, restaurants } = this.state;
    
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <HeaderMenu currentUser={currentUser} />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Main currentUser={currentUser} restaurants={restaurants} />
        </Content>
      </Layout>
    );
  }
}
