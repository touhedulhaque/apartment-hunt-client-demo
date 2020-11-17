import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import image2 from '../../../images/images/Rectangle 407.png';
import image3 from '../../../images/images/Rectangle 408.png';
import image4 from '../../../images/images/Rectangle 409.png';
import image5 from '../../../images/images/Rectangle 410.png';
import './Spics.css';


const Spics = () => {
    return (
        <div className="spic">
            <CardDeck>
  <Card>
    <Card.Img variant="top" src={image2} />
    
  </Card>
  <Card>
    <Card.Img variant="top" src={image3} />
    
  </Card>
  <Card>
    <Card.Img variant="top" src={image4} />
    
  </Card>
  <Card>
    <Card.Img variant="top" src={image5} />
    
  </Card>
</CardDeck>
        </div>
    );
};

export default Spics;