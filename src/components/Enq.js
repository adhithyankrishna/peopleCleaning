import React from "react";
import "../styles/Enq.css";

const Enq = () => {
  return (
    <div className="Enq">
      <div className="form-container">
        <div className="Enq-title">Contact us</div>
        <form>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Enq;
