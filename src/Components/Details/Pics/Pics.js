import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { fakeData } from '../../../fakeData/fakeData';
import image1 from '../../../images/images/Rectangle 406.png';
import Spics from '../Spics/Spics';
import './Pics.css';


const Pics = () => {
  let { apartmentId } = useParams();
  const apartment = fakeData.find(
    (apt) => apt.id.toString() === apartmentId.toString()
  );
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    fetch('https://fathomless-fjord-14298.herokuapp.com/addBooking', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          alert('Your booking Submit successfully.');
        }
      })
  }

  console.log(watch("example"));
  const { name, id, price } = apartment;
  // console.log(destination);
  return (
    <section className="row">
      <div className="col-md-6 pic">
        <div >
          <img src={image1} className="bgimg" alt="" />
        </div>
        <div>
          <Spics></Spics>
          <div className="d-flex justify-content-between">
            <h2 className="dtlspics">{name}</h2>
            <h2 className="dtlspics">${price}</h2>
          </div>

          <p className="writing">3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
          <h2 className="dtlspics">Price Details-</h2>
          <p className="writing">Rent/Month:{price} (negotiable) Service Charge : 8,000/= Tk per month, subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required</p>
          <h2 className="dtlspics">Property Details-</h2>
          <p className="writing">
            Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
            Flat Size : 3000 Sq Feet.
            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera

                    </p>
        </div>
      </div>
      <div className="col-md-6 ">

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input type="text" style={{ width: 400, paddingBottom: 10, marginBottom: 10, boxShadow: 40, borderRadius: 5 }} ref={register({ required: true })}
              name="name" placeholder="Your Name / Company's Name" className="form-control" />
            {errors.name && <span>Name is required</span>} </div><br>

          </br>
          <div className="form-group">
            <input type="text" style={{ width: 400, paddingBottom: 10, marginBottom: 10, boxShadow: 40, borderRadius: 5 }} ref={register({ required: true })}
              name="email" placeholder="Your Email" className="form-control" />
            {errors.email && <span>Email is required</span>}</div><br></br>

          <div className="form-group">
            <input type="number" style={{ width: 400, paddingBottom: 10, marginBottom: 10, boxShadow: 40, borderRadius: 5 }} ref={register({ required: true })}
              name="mobileNumber" placeholder="Mobile Number" className="form-control" />

            {errors.mobileNumber && <span>Mobile Number is required</span>}</div><br></br>
          <div className="form-group">
            <input type="text" style={{ width: 400, paddingBottom: 10, marginBottom: 10, boxShadow: 40, borderRadius: 5 }} defaultValue={name} ref={register({ required: true })}
              name="apartmentName" placeholder="Apartment Name" className="form-control" />
            {errors.apartmentName && <span>This field is required</span>}</div><br></br>

          <div className="form-group">
            <input type="text" style={{ width: 400, paddingBottom: 100, marginBottom: 10, boxShadow: 40, borderRadius: 5 }} ref={register({ required: true })}
              name="message" placeholder="Your Message" className="form-control" />
            {errors.message && <span>Message is required</span>}</div><br></br>

          <div className="form-group">
            <button type="submit" className="btn btn-brand" style={{ width: 400, marginBottom: 10, boxShadow: 40, borderRadius: 5, color: "white", backgroundColor: "#275A53", padding: 10 }}>SUBMIT</button></div>
        </form>
      </div>
    </section>
  );
};

export default Pics;