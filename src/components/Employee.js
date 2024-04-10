import React from "react";
import "../styles/Employee.css";
import empimg from "../asset/images/empemg.jpg";

const Employee = () => {
  return (
    <div className="employee">
      <div className="emp-container">
        <div className="emp-title">
          <div className="head">Empowering Our Team with Benefits</div>
        </div>
        <div
          className="emp-content"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.69)), url(${empimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <ul>
            <li>
              Provident Fund (PF) contributions: We invest in your future by
              contributing to your PF account, promoting long-term financial
              security.
              <br></br>
              <br></br>
            </li>

            <li>
              Employee State Insurance (ESI) coverage: We provide ESI benefits,
              ensuring access to quality healthcare for you and your family.
              <br></br>
              <br></br>
            </li>

            <li>
              Maternity benefits: We understand the importance of supporting
              mothers during this special time. We offer paid maternity leave to
              allow you to focus on your newborn baby.
              <br></br>
              <br></br>
            </li>

            <li>
              Competitive salaries and additional benefits: We offer competitive
              wages that reflect your hard work and commitment, along with
              additional benefits that can enhance your quality of life.
              <br></br>
              <br></br>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Employee;
