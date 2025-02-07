import React from "react";
import PropTypes from "prop-types";
import "./testimonials.css";

const Testimonials = ({
  heading,
  description,
  name,
  university,
  imageSrc,
  imageAlt,
  buttonText,
  rowReverse,
}) => {
  return (
    <section className="testimonials d-flex flex-column mt-4">
      <div
        className={`d-flex align-items-stretch ${
          rowReverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="d-flex flex-column align-items-center description">
          <div className="w-100 h-100 d-flex flex-column align-items-start justify-content-around description-wrapper">
            <div className="d-flex flex-column align-items-center testimonials-heading">
              <span className="text-dark fs-6 fw-semibold">{heading}</span>
            </div>
            <h2>{description}</h2>
            <div>
              <p className="m-0">{name}</p>
              <p className="m-0">{university}</p>
            </div>
            <a className="btn border-2 border-dark text-decoration-none text-dark rounded-pill px-3 py-2 fw-semibold">
              <span>{buttonText}</span> {/* Dynamic button text */}
            </a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start testimonials-image">
          <img
            alt={imageAlt}
            width="600"
            height="600"
            srcSet={`https://www.mentimeter.com/cdn-cgi/image/width=640,f=auto,quality=75/${imageSrc} 1x,
            https://www.mentimeter.com/cdn-cgi/image/width=1200,f=auto,quality=75/${imageSrc} 2x`}
            src={`https://www.mentimeter.com/cdn-cgi/image/width=1200,f=auto,quality=75/${imageSrc}`}
          />
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  heading: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired, // Prop for button text
};

export default Testimonials;
