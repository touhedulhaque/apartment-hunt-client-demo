import React from 'react';

const allBookings = ({ bookingsList }) => {
    return (
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
    );
};

export default allBookings;