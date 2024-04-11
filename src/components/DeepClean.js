import React from "react";
import "../styles/DeepClean.css";
import room from "../asset/images/image2.png";

const DeepClean = () => {
  return (
    <div className="deep-clean" itemScope itemType="http://schema.org/WebPage">
      <div className="deep-container" itemScope itemType="http://schema.org/Service">
        <img src={room} alt="image2" className="image2" itemProp="image" />
        <div className="content">
          <h1 itemProp="name">
            Breathe Easy: Transform Your Home with  People Cleaning Services
          </h1>
          <p itemProp="description">
            Many people underestimate the significant health benefits of a deep
            clean. Here's how our services can significantly improve your indoor
            environment: Reduced Allergens: We employ powerful cleaning methods
            and HEPA-filtered vacuums to remove allergens like dust mites, pet
            dander, and pollen, creating a healthier breathing environment,
            especially for allergy sufferers. Improved Air Quality: Deep
            cleaning eliminates dust and airborne contaminants, leading to
            noticeably improved indoor air quality, reducing respiratory
            irritation and promoting better overall health. Mold Prevention: Our
            deep cleaning techniques address hidden moisture issues that can
            harbor mold growth. We also offer specialized mold removal services
            for existing problems, ensuring a safe and healthy living space. A
            Deep Clean for Every Coimbatore Home:
          </p>
          <p>
            Our deep cleaning services are designed to address common household
            cleaning challenges, including dust mites, allergens, and mold. With
            our HEPA-filtered vacuums and meticulous cleaning techniques, we
            ensure a thorough and comprehensive clean for every room in your
            home. Whether you need a one-time deep clean or regular maintenance
            services, we're here to help you create a healthier living
            environment for you and your family.
          </p>
          <p>
            Contact us today to schedule your deep cleaning service and breathe
            easy knowing that your home is in good hands with People Cleaning
            Services.
          </p>
          <p>
            Keywords: deep cleaning, cleaning services, allergen removal, indoor
            air quality, mold prevention, Coimbatore, household cleaning,
            vacuuming, HEPA filters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeepClean;
