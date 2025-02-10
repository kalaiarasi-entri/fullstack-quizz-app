import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const VideoSection = () => {
  return (
    <section className="footer mt-4">
    <div className="container   py-4 d-flex d-flex flex-column justify-content-center= align-items-center">
      <div className="footer-wrapper d-flex flex-row align-items-stretch">
        <div className="footer-image-section">
          <img
            src={logo}
            alt="Full Stack Quiz Logo"
            width="120"
            height="50"
            className="d-inline-block align-top"
          />
        </div>
        <div className="foooter-list-section d-flex flex-row  justify-content-around align-items-center position-relative">
          <div className="list-five">
            <div className="text-decoration-underline">
              <h6>Features</h6>
            </div>
            <ul className="list-unstyled">
              <li>overview</li>
              <li>AI Quiz Master Builder</li>
              <li>Live polling</li>
              <li>Leaderboards & Badges</li>
              <li>Quiz</li>
              <li>Q&A</li>
              <li>HTML & CSS Quiz</li>
              <li>Presentations</li>
            </ul>
          </div>
          <div className="list-two">
            <div>
              <h6 className="text-decoration-underline">Resources</h6>
            </div>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>How to</li>
              <li>Work</li>
              <li>Education</li>
              <li>Templates</li>
              <li>Academy</li>
              <li>Webminars</li>
              <li>Comparision</li>
            </ul>
          </div>
          <div className="list-three">
            <div className="text-decoration-underline">
              <h6>Details</h6>
            </div>
            <ul className="list-unstyled">
              <li>Legal</li>
              <li>Policies</li>
              <li>Accessablility</li>
              <li>Help Center</li>
              <li>Requirements</li>
              <li>AI at Quiz Master</li>
              <li>Cookie peferences</li>
            </ul>
          </div>
          <div className="list-four">
            <div className="text-decoration-underline">
              <h6>About us</h6>
            </div>
            <ul className="list-unstyled">
              <li>Press Info</li>
              <li>The team</li>
              <li>Jobs</li>
              <li>Culture</li>
              <li>Benifits</li>
              <li>Contact us</li>
              <li>Climate</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default VideoSection;
