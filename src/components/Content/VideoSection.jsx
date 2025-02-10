import React from "react";
import "./content.css";

const VideoSection = () => {
  return (
    <>
      <div className="container">
        <section className="mt-4  d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center fw-normal lh-100 video-heading-font">
            How well do you know about Programming?
          </h1>
          <p className="text-center mt-2 video-text">
            Test your coding knowledge with interactive quizzes and challenge
            yourself to level up your skills.
          </p>
          <button className="btn btn-dark rounded-pill px-4 py-3 fw-bold">
            Start Quiz
          </button>
          <p className="mt-3 text-muted video-muted-text">
            No credit card needed
          </p>
        </section>
      </div>
      <section className="video-content d-flex flex-column position-relative overflow-hidden">
        {/* Background Image Wrapper */}
        <div id="image-wrapper" className="position-relative  h-100">
          <img
            alt=""
            src="https://static.mentimeter.com/static/images/BKGIMAGENU.svg"
            className="video-image position-absolute w-100 h-100 object-fit-cover"
          />
          {/* Video Wrapper */}
          <div className="position-relative w-100 d-flex video-div">
            <div>
              <div className="position-relative d-flex video-div-wrapper">
                <video
                  className="w-100 h-100"
                  src="https://static.mentimeter.com/static/motion/Square.mp4"
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </div>
        {/* Additional Div (Placeholder for Content) */}
      </section>
      <section className="mt-4 d-flex flex-column align-items-center mt-5 mt-1">
        <button className="btn btn-secondary px-3 py-2 fw-bold mt-2 theme-button ">
          Student Experience
        </button>
        <h2 className="mt-2" style={{ fontSize: "48px", fontWeight: "400" }}>
          From Learning to Mastery
        </h2>
        <p className="text-center mt-2 video-text" style={{ fontSize: "18px" }}>
          Test your knowledge, track your progress, and compete with others in
          real-time coding challenges.
        </p>
      </section>
      {/* <section className="tab-section mt-4">
         <TabSection></TabSection>
      </section> */}
    </>
  );
};

export default VideoSection;
