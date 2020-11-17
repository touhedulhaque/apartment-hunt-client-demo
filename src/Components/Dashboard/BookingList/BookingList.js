import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import BookingListCard from "../BookingListCard/BookingListCard";
import Sidebar from "../Sidebar/Sidebar";
import allBookings from "./allBookings";

const BookingList = () => {
  const [bookingsList, setbookingsList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch('https://fathomless-fjord-14298.herokuapp.com/allBookings')
      .then(res => res.json())
      .then(data => setbookingsList(data))
  }, [])

  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="col-md-10 p-4 pr-5 ml-auto">
        <div className="row mb-5 justify-content-md-center">
          <center>
            <h1 className="mt-5 text-center">Bookings</h1>
          </center>
        </div>
        <div className="text-center"><h3><u>Total Orders (Admin): {bookingsList.length}</u></h3>
          <table className="table table-borderless p-3">
            <thead>
              <tr>
                <th className="text-secondary" scope="col">Customer Name</th>
                <th className="text-secondary" scope="col">Apartment Name</th>
                <th className="text-secondary" scope="col">Message</th>
                <th className="text-secondary" scope="col">Booked Status</th>
              </tr>

            </thead>
            <tbody>
              {
                bookingsList.map((book, index) =>

                  <tr>
                    <td>{book.name}</td>
                    <td>{book.apartmentName}</td>
                    <td>{book.message}</td>
                    <td> {<button type="button" class="btn btn-success">booked</button>} </td>
                  </tr>
                )
              }
            </tbody>
          </table>
          {/* {
            <allBookings bookingsList={bookingsList} ></allBookings>
          } */}
        </div>
      </div>
    </section>
  );
};

export default BookingList;