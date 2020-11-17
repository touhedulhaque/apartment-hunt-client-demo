
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import location from '../../../images/logos/map-marker-alt-solid 1.png';
import bed from '../../../images/logos/bed 1.png';
import bath from '../../../images/logos/bath 1.png';

import './ApartmentCard.css';
import { Link } from 'react-router-dom';

const ApartmentCard = (props) => {
    const { image, name,  id , price} = props.apartment;
    return (
        <div className="col-md-4 apartment">
            
           
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
          <div class="d-flex justify-content-between ">
        <img src={location} class="location mr-5"  alt=""/>
        <p class="mr-auto">Nasirabad H/S , Chittagong</p>
        </div>
        <div class="d-flex justify-content-between ">
        <img src={bed} class="location mr-5"  alt=""/>
        <p class="mr-auto">3 BedRooms</p>
        <img src={bath} class="location mr-5"  alt=""/>
        <p class="mr-auto">2 baths</p>

        </div>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <div class="d-flex justify-content-between ">
     <h1 class="dollar">${price}</h1>
     <Link to={"/details/" + id}>
     <button class="details">VIEW DETAILS</button>
     </Link>
     </div>
    </Card.Footer>
  </Card>
     
           
        </div>
    );
};

export default ApartmentCard;
