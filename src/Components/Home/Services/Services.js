import React, { useState } from 'react';
import { serviceData } from '../../../fakeData/serviceData';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [services, setservices] = useState(serviceData);
    return (
        <div>
            <div>
            <h3 class="service">Service</h3>
            <h2 class="agency">We're an agency tailored to all clients' needs that always delivers</h2>
            </div>
            <div className="row justify-content-around apt">
        {services.map((srvc) => (
          <ServiceCard key={srvc._id} service={srvc}>
            {srvc.name}
            </ServiceCard>
          
        ))}
      </div>
        </div>
    );
};

export default Services;