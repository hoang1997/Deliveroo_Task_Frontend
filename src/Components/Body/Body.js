import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import RestaurantCard from "../RestaurantCard";
import './Body.css';

export default class Body extends Component {
  render() {
    const { data } = this.props;
      return (
        <div>
          <div className="restaurantFoundContainer">
            <p className="restaurantFound">
              {data.restaurants.length} Restaurants Found
            </p>
          </div>
          <Row style={{ padding: "15px" }}>
            {data.restaurants.map((restaurantDetail) => {
              return (
                <Col>
                  <RestaurantCard data={restaurantDetail} />
                </Col>
              );
            })}
          </Row>
        </div>
      );
  }
}
