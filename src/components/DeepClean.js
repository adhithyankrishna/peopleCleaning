import React from "react";
import "../styles/DeepClean.css";
import room from "../asset/images/image2.png";

const DeepClean = () => {
  return (
    <div className="deep-clean">
      <div className="container">
        <div className="content">
          <h1>
            Breathe Easy: Transform Your Home with Our Deep Cleaning Services
          </h1>
          <p>
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
        </div>
        <img src={room} alt="image2" className="image2" />
      </div>
    </div>
  );
};

export default DeepClean;
