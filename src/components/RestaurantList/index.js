import React, { Component } from "react";
import map from "lodash/map";

export default class RestaurantsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { restaurants } = this.props;
    return (
      <div>
        {restaurants && map(restaurants,(restaurant,key) => <p key={key}>{restaurant.name}</p>)}
      </div>
    );
  }
}
