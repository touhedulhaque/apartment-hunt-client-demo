import React from 'react';
import './HeaderMain.css';


const HeaderMain = () => {
  return (
    <div className="container" >
      <div className="text-center pt-5 ">
        <h4 className="pt-5" style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "47px",
          color: "#fff5ee"
        }}>Find Your House Rent</h4>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
              </div>

              <div className="col">
                <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search........." />
              </div>

              <div class="col-auto">
                <button style={{ backgroundColor: "#275a53" }} className="btn btn-lg btn-success" type="submit">Find Now</button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </div>


  );
};

export default HeaderMain;