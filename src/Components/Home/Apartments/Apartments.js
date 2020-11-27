import React, { useState } from 'react';
import { fakeData } from '../../../fakeData/fakeData';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import './Apartments.css'

const Apartments = () => {
  const [apartments, setApartments] = useState(fakeData);
  return (
    <section className="apartments-container mt-5 mb-1 p=1">
      <div className="text-center mt-5 mb-5">
        <h3 style={{ color: "#275a53" }}>House Rent</h3>
        <h2 style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "34px"
        }}>Discover The Latest Rent Available Today</h2>
      </div>


      <div className="d-flex justify-content-around">
        <div className="w-75 row mt-5 pt-5">
          {apartments.map((apt) => (
            <ApartmentCard key={apt._id} apartment={apt}>
              {apt.name}
            </ApartmentCard>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Apartments;