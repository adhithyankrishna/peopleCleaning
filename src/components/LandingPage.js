import React from "react";
import "../styles/LandingPage.css";
import logo from "../asset/images/logo.png";
import living from "../asset/images/living.png";
import { routes } from "./Routes";
import { NavMobile } from "./NavMobile";

const LandingPage = () => {
  return (
    <div className="LandingPage" itemScope itemType="http://schema.org/WebPage">
      <div className="navbar">
        <div className="logodiv">
          <img src={logo} alt="logo" className="logoimg" itemProp="logo" />
        </div>
        <div className="button">
          <span className="ham">
            <NavMobile />
          </span>

          <ul
            className="hidden lg-flex lg-items-center gap-5 text-sm"
            itemProp="mainEntity"
            itemScope
            itemType="http://schema.org/SiteNavigationElement"
          >
            {routes.map((route) => {
              const { Icon, href, title } = route;
              return (
                <li key={href} itemScope itemType="http://schema.org/ListItem">
                  <a
                    href={href}
                    className="flex items-center gap-1 hover:text-neutral-400 transition-all"
                    itemProp="url"
                  >
                    <Icon />
                    {title}
                  </a>
                  <meta itemProp="name" content={title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="container"
        itemScope
        itemType="http://schema.org/LocalBusiness"
      >
        <img
          src={living}
          alt="mainImage"
          className="mainimg"
          itemProp="image"
        />
        <div className="maintitle">
          <h1 itemProp="name">
            People Cleaning Services And Facility Management
          </h1>
          <h2>Beyond Clean: Crafting Spaces with Care</h2>
          <p className="l-content" itemProp="description">
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
          <meta itemProp="address" content="Your Company Address" />
          <meta itemProp="telephone" content="Your Company Phone Number" />
          <meta itemProp="openingHours" content="Mo-Su 09:00-18:00" />
          <meta itemProp="priceRange" content="$" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
