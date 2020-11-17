import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { image, name,  _id, description } = props.service;

    return (
        <div className="col-md-4 d-flex justify-content-between">
            <Card >
    <Card.Img variant="top"  class="srvcimg" src={image} />
    <Card.Body class="name">
      <Card.Title className="card-name">{name}</Card.Title>
      <Card.Text class="dsc">
        {description}
      </Card.Text>
    </Card.Body>
   
  </Card>
        </div>
    );
};

export default ServiceCard;