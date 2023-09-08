import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

function AdminCourses() {
  return (
    <div className="container">
      {/* ------------------------------------ nav to search courses ------------------------------------- */}

      <nav class="navbar  justify-content-between mt-4">
        <div>
          <select class="form-select">
            <option>----Select Course Category----</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <form class="form-inline d-flex ">
          <input
            class="form-control mr-sm-2 mx-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>

      {/* ---------------------------------- add course Button --------------------------------------       */}

      <button className="btn btn-primary mt-2"> Add Course</button>

      {/* ---------------------------------- Table for courses --------------------------------------       */}

      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">S no.</th>
            <th scope="col">Course Name</th>
            <th scope="col">Course Duration</th>
            <th scope="col">Course fees</th>
            <th scope="col">Eligibility</th>
            <th scope="col">Created at</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>O level</td>
            <td>1 year</td>
            <td>24000</td>
            <td>10 class</td>
            <td>5 may 2023</td>
            <td>
              <Link style={{ textDecoration: "none", color: "" }} to="/admin/courses/users">
                View Candidates
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>A level</td>
            <td>1 year</td>
            <td>24000</td>
            <td>10 class</td>
            <td>5 may 2023</td>
            <td>
              <Link style={{ textDecoration: "none", color: "" }} to="/admin/courses/users">
                View Candidates
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>B level</td>
            <td>1 year</td>
            <td>24000</td>
            <td>10 class</td>
            <td>5 may 2023</td>
            <td>
              <Link style={{ textDecoration: "none", color: "" }} to="/admin/courses/users" >
                View Candidates
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminCourses;
