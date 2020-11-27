import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css'

const ServiceCard = ({ srvc }) => {


  return (
    <div className="container col-md-4 p-3">
      <div className="card-style p-4 text-center">
        <img src={srvc.image} alt="" width="150px" /> <br />
        <br />
        <h5>{srvc.name}</h5> <br />
        <p className="text-secondary">{srvc.description}</p>
      </div>


    </div>
    // <div className="col-md-4 d-flex justify-content-between">
    //   <Card >
    //     <Card.Img variant="top" src={srvc.image} />
    //     <Card.Body >
    //       <Card.Title className="card-name">{srvc.name}</Card.Title>
    //       <Card.Text >
    //         {srvc.description}
    //       </Card.Text>
    //     </Card.Body>

    //   </Card>
    // </div>
  );
};

export default ServiceCard;