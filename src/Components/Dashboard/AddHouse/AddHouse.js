import React, { useState, useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

// const handleAddServices=()=>{
//   fetch('https://polar-springs-72792.herokuapp.com/addServices',{
//       method:'POST',
//       headers:{
//           'Content-Type':'application/json'
//       },
//       body:JSON.stringify(serviceData)
//   })
// }

// const handleAddReviews=()=>{
//     fetch('https://polar-springs-72792.herokuapp.com/addReviews',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(reviewData)
//     })
//   }

const AddHouse = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    fetch('https://fathomless-fjord-14298.herokuapp.com/addApartmentForRent', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(success => {
        if (success) {
          alert('Your Apartment Added successfully.');
        }
      })
  }
  // const [info, setInfo] = useState({});
  // const [file, setFile] = useState(null);

  // const handleBlur = (e) => {
  //   const newInfo = { ...info };
  //   newInfo[e.target.name] = e.target.value;
  //   setInfo(newInfo);
  // };

  // const handleFileChange = (e) => {
  //   const newFile = e.target.files[0];
  //   setFile(newFile);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();

  //   formData.append("file", file);
  //   formData.append("name", info.name);
  //   formData.append("description", info.description);

  //   fetch('https://fathomless-fjord-14298.herokuapp.com/addApartmentForRent', {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       alert("New House Added Successfully");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };

  return (
    <div style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>

      <div className="col-md-10 p-4 pr-5 ml-auto">
        <div className="row mb-5 justify-content-md-center">
          <center>
            <h1 className="mt-5 text-center">Add House</h1>
          </center>
        </div>

        <form className="card" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input type="text" ref={register({ required: true })} name="houseTitle" placeholder="House Title" className="form-control" />
            {errors.houseTitle && <span className="text-danger">This field is required</span>}
          </div>
          <div className="form-group">
            <input type="text" ref={register({ required: true })} name="description" placeholder="Apartment Description" className="form-control" />
            {errors.description && <span className="text-danger">This field is required</span>}
          </div>

          <div>
            <input type="file" placeholder="upload image" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-brand" style={{ backgroundColor: "#275A53" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>


  );
};

export default AddHouse;
