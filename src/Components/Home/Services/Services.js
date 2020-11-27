import React, { useState } from 'react';
import { serviceData } from '../../../fakeData/serviceData';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState(serviceData);
  return (
    <section className="services-container mt-5 mb-1 p-1">
      <div className="text-center">
        <h3 style={{ color: "#275a53" }}>Service</h3>
        <h2 style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "34px"
        }}>We're an agency tailored to all clients' needs that always delivers</h2>
      </div>
      <div className="d-flex justify-content-around">
        <div className="w-75 row mt-5 pt-5">
          {
            services.map((srvc) => <ServiceCard srvc={srvc}></ServiceCard>)
          }

        </div>
      </div>
    </section>
  );
};

export default Services;