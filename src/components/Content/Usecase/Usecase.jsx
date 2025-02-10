import React from "react";
import "./usecase.css";
import Testimonials from "../Testimonials/Testimonials";

const UsecaseSection = () => {
  // Data passed as props to Testimonials component
  const testimonialData = [
    {
      heading: "In the classroom",
      description:
        "This quiz platform has made my coding classes more interactive. Students enjoy learning and competing at the same time!.",
      name: "Teresa Delfinn",
      university: "California State Polytechnic University",
      imageSrc:
        "https://static.mentimeter.com/static/images/ClassroomBackground.webp",
      imageAlt: "No Image Available",
      buttonText: "Explore Education Use Cases", // Dynamic button text
      rowReverse: true, // This will apply flex-row-reverse
    },
    {
      heading: "In the office",
      description:
        "We use this for our developer training sessions. It’s a fun way to assess skills and encourage continuous learning.",
      name: "Merv Wyeth",
      university: "Program Director at Project Management Institute",
      imageSrc:
        "https://static.mentimeter.com/static/images/OfficeBackground.png",
      imageAlt: "No image Available",
      buttonText: "Work use cases", // Dynamic button text
      rowReverse: false, // This will  apply flex-row
    },
  ];
  return (
    <>
      <div className="container">
        <section className="mt-4 d-flex flex-column align-items-center  mb-4">
          <h2 className="mt-2" style={{ fontSize: "48px", fontWeight: "400" }}>
            Get started in 3 steps
          </h2>
          <p
            className="text-center mt-2 video-text"
            style={{ fontSize: "18px" }}
          >
            Quiz Master helps you to Learn, Challenge, and Track Progress -
            let's see how!
          </p>
        </section>
        <section className="steps">
          <div className="d-flex flex-row gap-3">
            <div className="d-flex align-items-start justify-content-between flex-column lh-1 fw-normal steps-div  px-4 py-4">
              <div>
                <h3>Create</h3>
              </div>
              <div
                className="d-flex flex-column align-items-start w-auto pt-3"
                style={{ minWidth: 0, minHeight: 0, position: "relative" }}
              >
                <img
                  alt="Hands on a keyboard"
                  width="338"
                  height="270"
                  src="https://www.mentimeter.com/cdn-cgi/image/width=750,f=auto,quality=75/https://static.mentimeter.com/static/images/HowItWorksCreate.png"
                ></img>
              </div>
              <div>
                <p className="pt-4 fw-normal">
                  Build custom quizzes in seconds! Choose from various
                  coding-related questions, add difficulty levels, and set time
                  limits for each question.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-between flex-column lh-1 fw-normal steps-div  px-4 py-4">
              <div>
                <h3>Play</h3>
              </div>
              <div
                className="d-flex flex-column align-items-start w-auto pt-3"
                style={{ minWidth: 0, minHeight: 0, position: "relative" }}
              >
                <img
                  alt="Hands on a keyboard"
                  width="338"
                  height="270"
                  src="https://www.mentimeter.com/cdn-cgi/image/width=384,f=auto,quality=75/https://static.mentimeter.com/static/images/HowItWorksInteract.png"
                ></img>
              </div>
              <div>
                <p className="pt-4 fw-normal">
                  Join a live quiz or practice at your own pace. Answer
                  questions instantly on any device and see real-time results.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-between flex-column lh-1 fw-normal steps-div  px-4 py-4">
              <div>
                <h3>Analyze</h3>
              </div>
              <div
                className="d-flex flex-column align-items-start w-auto pt-3"
                style={{ minWidth: 0, minHeight: 0, position: "relative" }}
              >
                <img
                  alt="Hands on a keyboard"
                  width="338"
                  height="270"
                  src="https://www.mentimeter.com/cdn-cgi/image/width=384,f=auto,quality=75/https://static.mentimeter.com/static/images/HowItWorksAnalyze.png"
                ></img>
              </div>
              <div>
                <p className="pt-4 fw-normal">
                  Track performance insights with detailed reports. Identify
                  your strengths and areas for improvement with analytics-driven
                  feedback.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial details passing data to Testimonials component */}
        {testimonialData.map((testimonial, index) => (
          <Testimonials
            key={index} // Unique key for each item in the array
            heading={testimonial.heading}
            description={testimonial.description}
            name={testimonial.name}
            university={testimonial.university}
            imageSrc={testimonial.imageSrc}
            imageAlt={testimonial.imageAlt}
            buttonText={testimonial.buttonText}
            rowReverse={testimonial.rowReverse} // Passing rowReverse as a prop
          />
        ))}
      </div>
    </>
  );
};

export default UsecaseSection;
