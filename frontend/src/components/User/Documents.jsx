import React from "react";

export default function Documents() {
  return (
    <div className="container">
      <form className="row g-3">
        <div className="d-flex justify-content-center ">
          <h4>Documents </h4>
        </div>

        {/* ---------------////////////////////////  Aadhar  /////////////////------------------------
         */}

        <div className="col-md-6">
          <label
            htmlFor="validationDefault05"
            className="form-label mandatory "
          >
            Aadhar
          </label>
          <input
            type="file"
            className="form-control"
            id="validationDefault05"
            required
          />
        </div>

        {/* ---------------////////////////////////  10th Marksheet /////////////////------------------------
         */}

        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label mandatory">
            10th Marksheet
          </label>
          <input
            type="file"
            className="form-control"
            id="validationDefault01"
            required
          />
        </div>

        {/* ---------------////////////////////////  12th Marksheet /////////////////------------------------
         */}

        <div className="col-md-6">
          <label htmlFor="validationDefault02" className="form-label mandatory">
            12th Marksheet
          </label>
          <input
            type="file"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>

        {/* ---------------////////////////////////  degree  /////////////////------------------------
         */}

        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label ">
            Degree
          </label>
          <input
            type="file"
            className="form-control"
            id="validationDefault03"
          />
        </div>

        {/* ---------------////////////////////////  other  /////////////////------------------------
         */}

        <div className="col-md-6">
          <label htmlFor="validationDefault04" className="form-label ">
            Others
          </label>
          <input
            type="file"
            className="form-control"
            id="validationDefault04"
            required
          />
        </div>
      </form>
    </div>
  );
}
