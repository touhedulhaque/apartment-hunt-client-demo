import React, { useState } from 'react';
import { fakeData } from '../../../fakeData/fakeData';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import './Apartments.css'

const Apartments = () => {
    const [apartments, setapartments] = useState(fakeData);
    return (
        <div>
           <div>
            <h3 class="rent">House Rent</h3>
            <h2 class="discover">Discover The Latest Rent Available Today</h2>
            </div>
           <div className="row justify-content-around apt">
        {apartments.map((apt) => (
          <ApartmentCard key={apt._id} apartment={apt}>
            {apt.name}
            </ApartmentCard>
          
        ))}
      </div>
        </div>
    );
};

export default Apartments;