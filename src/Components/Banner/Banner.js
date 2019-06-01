import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import './Banner.css';

export default class Banner extends Component {
    render() {
        const { data } = this.props;
      return (
        <div className="bannerContainer">
          <Row>
            <Col md={6}>
              <div className="locationContainer">
                <p className="locationTitle">Location</p>
                <p className="locationDetail">{data.neighborhood}</p>
              </div>
            </Col>
            <Col md={6} className="buttonCol">
              <a href="https://deliveroo.co.uk/sitemap">
                <button className="locationBtn">Change Location</button>
              </a>
            </Col>
          </Row>
        </div>
      );
  }
}
