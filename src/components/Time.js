import React from "react";
import "../styles/Time.css"; // Import CSS file for styling

const Time = () => {
  return (
    <div className="time">
      <div className="time-container">
        <h1 className="title">
          People Cleaning Services: Flexible Cleaning Solutions to Fit Your
          Schedule
        </h1>
        <div className="time-content">
          <div className="section">
            <h2 className="section-title">Flexible Scheduling:</h2>
            <ul className="section-list">
              <li>
                Choose Your Cleaning Time: Whether you prefer mornings,
                afternoons, or evenings, we work around your busy schedule to
                find an appointment time that works best for you.
              </li>
              <li>
                Flexible Days: Need a cleaning on a weekend or a weekday
                evening? We offer cleaning services on all days of the week,
                including Sundays, to accommodate your needs.
              </li>
              <li>
                One-Time Cleaning or Recurring Service: Need a deep clean before
                a big event or ongoing maintenance? We offer both one-time
                cleaning services and recurring cleaning schedules, weekly,
                bi-weekly, or monthly, based on your preference.
              </li>
            </ul>
          </div>
          <div className="section">
            <h2 className="section-title">Flexible Staffing:</h2>
            <ul className="section-list">
              <li>
                The Right Team for the Job: We have a team of experienced and
                reliable cleaning professionals who specialize in different
                cleaning tasks. Whether you need a single cleaner for a basic
                cleaning or a team for a deep clean, we can provide the right
                staff for the job.
              </li>
              <li>
                Multiple Cleanings at Once: Need cleaning services for multiple
                locations, like your home and office? We can coordinate multiple
                cleaning crews simultaneously to ensure efficient cleaning.
              </li>
              <li>
                Short Notice Availability: We understand that unexpected
                situations arise. We'll do our best to accommodate last-minute
                cleaning requests whenever possible.
              </li>
            </ul>
          </div>
          <div className="section">
            <h2 className="section-title">Benefits of Flexible Cleaning:</h2>
            <ul className="section-list">
              <li>
                Convenience: Schedule cleanings that fit your busy lifestyle.
              </li>
              <li>
                Peace of Mind: Focus on what matters most while your cleaning
                needs are taken care of.
              </li>
              <li>
                Customizable Service: Tailor the cleaning to your specific needs
                and budget.
              </li>
              <li>
                Reliable Service: Our dedicated staff is committed to providing
                consistently high-quality cleaning services.
              </li>
            </ul>
          </div>
          <div className="section">
            <h2 className="section-title">Flexible Worker Options:</h2>
            <ul className="section-list">
              <li>
                Hourly or Package Rates: Choose between paying an hourly rate or
                a fixed package price for your cleaning service.
              </li>
              <li>
                Trained and Insured Staff: All our cleaning professionals are
                thoroughly trained and insured, giving you peace of mind.
              </li>
              <li>
                Eco-Friendly Cleaning Practices: We are committed to using
                environmentally friendly cleaning products whenever possible,
                keeping your home healthy and protecting the environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
