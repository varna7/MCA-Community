import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import "./CollegeDashboard.scss";

const CollegeDashboard = () => {
  return (
    <div className="clg">
      <div className="basic">
        <div className="title">
          <span>Basic Details</span>
          <hr />
        </div>
        <div className="details">
          <table>
            <tr>
              <td className="">Institution Type</td>
              <td>:</td>
              <td>Government</td>
            </tr>
            <tr>
              <td>Affiliated to</td>
              <td>:</td>
              <td>KTU</td>
            </tr>
            <tr>
              <td>No. of Intake</td>
              <td>:</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Mode of Intake</td>
              <td>:</td>
              <td>LBS MCA Entrance</td>
            </tr>

          </table>
        </div>
      </div>
      <div className="section">
        <div className="item">
          <div className="title">
            <span>Vision</span>
            <div className="icon">
              <EditIcon />
            </div>
          </div>
          <p>
            Provide quality education and training at post graduate level in
            Computer Applications, thereby transforming the youth into IT
            professionals with social commitment.
          </p>
        </div>
        <div className="vl"></div>
        <div className="item">
          <div className="title">
            <span>Mission</span>
            <div className="icon">
              <EditIcon />
            </div>
          </div>
          <p>
            To become a center of excellence in the vast area of computer
            applications in a competent and socially responsible way through
            education and research.
          </p>
        </div>
      </div>
      <div className="section d-flex flex-column p-4">
        <div className="title fw-bold ">
          <span>Faculties</span>
        </div>
        <table >
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Contact</th>
            <th scope="col"> Action</th>
          </tr>
          </thead>
          <tbody>
          <tr className="">
            <td scope="row">1</td>
            <td>Deepa S S</td>
            <td>HOD, Associate Professor</td>
            <td>9446570286</td>
            <td>
              <EditIcon />
            </td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>Dr. SreeLekshmi R</td>
            <td>PG Dean, Professor</td>
            <td>9446570286</td>
            <td>
              <EditIcon />
            </td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td>Shine S</td>
            <td> Associate Professor</td>
            <td>9446570286</td>
            <td>
              <EditIcon />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegeDashboard;
