import React from "react";
import "./usecase.css";
import Testimonials from "../Testimonials/Testimonials";

const UsecaseSection = () => {
  // Data passed as props to Testimonials component
  const testimonialData = [
    {
      heading:"In the classroom",
      description:
        "Mentimeter allows everyone to ask questions, to get clarification or a clearer understanding on subjects resulting in a more fulfilling learning experience.",
      name: "Teresa Delfinn",
      university: "California State Polytechnic University",
      imageSrc:
        "https://static.mentimeter.com/static/images/ClassroomBackground.webp",
      imageAlt: "A man and a woman laughing",
      buttonText: "Explore Education Use Cases", // Dynamic button text
      rowReverse: true // This will apply flex-row-reverse
    },
    {
      heading:"In the office",
      description:
        "I have produced powerful interactions, and everyone seems to be smiling. Mentimeter enables us to also collect high-quality data points.",
      name: "Merv Wyeth",
      university: "Program Director at Project Management Institute",
      imageSrc:
        "https://static.mentimeter.com/static/images/OfficeBackground.png",
      imageAlt: "A man and a woman laughing",
      buttonText: "Work use cases", // Dynamic button text
      rowReverse: false // This will  apply flex-row

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
            Mentimeter helps you create, interact, and analyse - let's see how!
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
                  Whatever you're looking to create, Mentimeter has the answer.
                  Make your presentation in seconds from a template, or start
                  from scratch, add an interactive slide, and you’re all set!
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-between flex-column lh-1 fw-normal steps-div  px-4 py-4">
              <div>
                <h3>Interact</h3>
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
                  Whatever you're looking to create, Mentimeter has the answer.
                  Make your presentation in seconds from a template, or start
                  from scratch, add an interactive slide, and you’re all set!
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
                  Whatever you're looking to create, Mentimeter has the answer.
                  Make your presentation in seconds from a template, or start
                  from scratch, add an interactive slide, and you’re all set!
                </p>
              </div>
            </div>
          </div>
        </section>
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
