import React, { Component } from "react";
import map from "lodash/map";
import { database } from "../../firebase";
import { Row, Col, Card, Button } from "antd";

export default class RestaurantsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSelect = key => {
    const { currentUser } = this.props;
    database
      .ref("restaurants")
      .child(key)
      .child("votes")
      .child(currentUser.uid)
      .set(currentUser.displayName);
  };

  handleDeselect = key => {
    const { currentUser } = this.props;
    database
      .ref("restaurants")
      .child(key)
      .child("votes")
      .child(currentUser.uid)
      .remove();
  };

  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Row>
          {restaurants &&
            map(restaurants, (restaurant, key) => (
              <Col span={8}>
                <Card
                  title={restaurant.name}
                  bordered={false}
                  style={{ width: 400 }}
                >
                  <p>Voters: </p>
                  {restaurant.votes && map(restaurant.votes, (vote) => <p>{vote}</p>)}
                  <div style={{display:'flex',justifyContent:"space-between"}}>
                    <Button
                      type="primary"
                      onClick={() => this.handleSelect(key)}
                    >
                      Yes, I'd go there
                    </Button>
                    <Button onClick={() => this.handleDeselect(key)}>
                      Nah, Never Mind
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
