import React, { Component } from "react";
import {Col, Card } from "react-bootstrap";

export default class RestaurantCard extends Component {
    render() {
        const { data } = this.props;

        function returnPrice(count) {
          var price = "";
          for (var i = 0; i <= count; i++) {
            price += "£";
          }
          return price;
        }
        
        return (
            <Col style={{ padding: "0" }}>
                <a href={data.url} style={{color:"#000"}}>
                    <Card  style={{ width: "18rem", margin: "20px auto", border: "none", fontFamily:"stratos, Helvetica Neue,Helvetica,Arial,Microsoft YaHei,Hiragino Sans GB,sans-serif" }}>
                        <Card.Img variant="top" src={data.image} />
                        <Card.Body>
                            <Card.Title style={{ fontWeight: "700" }} href={data.url}>{data.name}</Card.Title>
                            <Card.Text style={{ opacity: "0.5" }}>
                                {data.tags.map((tag, index) => {
                                    if (index === data.tags.length - 1) {
                                        return tag + "  \u2022 " + returnPrice(data.price);
                                    }
                                    else {return tag + "  \u2022 ";}
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        );
    }
}
