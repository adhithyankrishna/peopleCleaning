import React from "react";
import "../styles/LandingPage.css";
import logo from "../asset/images/logo.png";
import living from "../asset/images/living.png";
import { routes } from "./Routes";
import { NavMobile } from "./NavMobile";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="navbar">
        <div className="logodiv">
          <img src={logo} alt="logo" className="logoimg" />
        </div>
        <div className="button">
          <span className="ham">
            <NavMobile />
          </span>

          <ul className="hidden lg-flex lg-items-center gap-5 text-sm">
            {routes.map((route) => {
              const { Icon, href, title } = route;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-1 hover:text-neutral-400 transition-all"
                  >
                    <Icon />
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="container">
        <img src={living} alt="mainImage" className="mainimg" />
        <div className="maintitle">
          <h1>People Cleaning Services And Facility Management</h1>
          <p className="l-content">
            Exhausted from battling dust bunnies and a constant layer of grime?
            Worried about the hidden threats lurking in every corner –
            allergens, dust mites, and even mold? At People Cleaning Services
            (PCS), we understand the profound impact a clean and healthy home
            environment has on your well-being. That's why we're Coimbatore's
            leading provider of comprehensive deep cleaning services, designed
            to go far beyond surface-level cleaning. Our meticulous approach
            tackles dirt, grime, and allergens from every nook and cranny of
            your residence, leaving you with a sparkling clean space that
            promotes better health and a renewed sense of peace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
