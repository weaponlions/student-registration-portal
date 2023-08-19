import React from "react";

export default function Qualification() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center ">
        <h4>Educational Qualification</h4>
      </div>
      <form className="row g-3"> 

        <div className="col-md-12">
          <label htmlFor="validationDefault01" className="form-label mandatory">
            Highest Qualification
          </label>

          <select className="form-select" id="validationDefault01" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>10th</option>
            <option>12th</option>
            <option>below 10th</option>
            <option>Gradugate or Higher</option>
          </select>
        </div>

        {/* --------------///////////////////////   Marticulation(10th) Qualification ///////////////------------------- */}
        <h5 className="text-danger">Marticulation(10th) Qualification</h5>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label mandatory">
            Marticulation(10th) Board
          </label>

          <select className="form-select" id="validationDefault02" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>State Boards</option>
            <option>CBSE</option>
            <option>ICSE</option>
            <option>CISCE</option>
            <option>NIOS</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault03" className="form-label mandatory">
            School Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault04" className="form-label mandatory">
            Year of passing{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault04"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault05" className="form-label mandatory">
            Percentage
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault06" className="form-label mandatory">
            Division
          </label>
          <select className="form-select" id="validationDefault06" required>
            <option selected disabled value="">
              Choose...
            </option>

            <option>first</option>
            <option>second</option>
            <option>third</option>
          </select>
        </div>

        {/* --------------///////////////////////   12th Qualification ///////////////------------------- */}
        <h5 className="text-danger">12th Qualification</h5>
        <div className="col-md-4">
          <label htmlFor="validationDefault07" className="form-label mandatory">
            12th Board
          </label>

          <select className="form-select" id="validationDefault07" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>State Boards</option>
            <option>CBSE</option>
            <option>ICSE</option>
            <option>CISCE</option>
            <option>NIOS</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault08" className="form-label mandatory">
            School Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault08"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault09" className="form-label mandatory">
            Year of passing{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault09"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault10" className="form-label mandatory">
            Percentage
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault10"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault11" className="form-label mandatory">
            Division
          </label>
          <select className="form-select" id="validationDefault11" required>
            <option selected disabled value="">
              Choose...
            </option>

            <option>first</option>
            <option>second</option>
            <option>third</option>
          </select>
        </div>

        {/* --------------///////////////////////   Graduation Qualification ///////////////------------------- */}
        <h5 className="text-danger">Graduation</h5>

        <div className="col-md-4">
          <label htmlFor="validationDefault22" className="form-label mandatory">
            Bachelor degree
          </label>
          <select className="form-select" id="validationDefault22" required>
            <option selected disabled value="">
              Choose...
            </option>

            <option>BSc</option>
            <option>BA</option>
            <option>BCom</option>
            <option>Btech </option>
            <option>BCA</option>
            <option>Others</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault12" className="form-label mandatory">
            {" "}
            University
          </label>

          <input
            type="text"
            className="form-control"
            id="validationDefault12"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault13" className="form-label mandatory">
            Institute Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault13"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault14" className="form-label mandatory">
            Year of passing{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault14"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault15" className="form-label mandatory">
            Percentage
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault15"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault16" className="form-label mandatory">
            Division
          </label>
          <select className="form-select" id="validationDefault16" required>
            <option selected disabled value="">
              Choose...
            </option>

            <option>first</option>
            <option>second</option>
            <option>third</option>
          </select>
        </div>

        {/* --------------///////////////////////   Other Qualification ///////////////------------------- */}
        <h5 className="text-danger"> Other Qualification Below 10th</h5>
        <div className="col-md-4">
          <label htmlFor="validationDefault17" className="form-label mandatory">
            class
          </label>

          <select className="form-select" id="validationDefault17" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>6th</option>

            <option>7th</option>
            <option>8th</option>
            <option>9th</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault18" className="form-label mandatory">
            School Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault18"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault19" className="form-label mandatory">
            Year of passing{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault19"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault20" className="form-label mandatory">
            Percentage
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault20"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="validationDefault21" className="form-label mandatory">
            Division
          </label>
          <select className="form-select" id="validationDefault21" required>
            <option selected disabled value="">
              Choose...
            </option>

            <option>first</option>
            <option>second</option>
            <option>third</option>
          </select>
        </div>
      </form>
    </div>
  );
}
