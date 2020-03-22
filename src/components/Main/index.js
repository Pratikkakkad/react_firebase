import React, { Component } from "react";
import NewRestaurants from "../NewRestaurants";
import RestaurantsList from "../RestaurantList";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { restaurants,currentUser } = this.props;
    
    return (
      <div>
        <h3>Restourents</h3>
        <div>
          <NewRestaurants />
          <RestaurantsList restaurants={restaurants} currentUser={currentUser} />
        </div>
      </div>
    );
  }
}
