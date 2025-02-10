import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid mx-5">
        <a className="navbar-brand w-25" href="/">
          <img
            src={logo}
            alt="Full Stack Quiz Logo"
            width="120"
            height="50"
            className="d-inline-block align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link fw-bold d-flex align-items-center"
                href="/business"
              >
                Home
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginTop: "5px",
                    marginLeft: "5px",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold d-flex align-items-center"
                href="/education"
              >
                Topics
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginTop: "5px",
                    marginLeft: "5px",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold d-flex align-items-center"
                href="/enterprise"
              >
                Challenges
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginTop: "5px",
                    marginLeft: "5px",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold d-flex align-items-center"
                href="/learn"
              >
                Leaderboard
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginTop: "5px",
                    marginLeft: "5px",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold d-flex align-items-center"
                href="/pricing"
              >
                About
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginTop: "5px",
                    marginLeft: "5px",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold d-flex align-items-center"
                href="/talk-to-sales"
              >
                Contact
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginTop: "5px",
                    marginLeft: "5px",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <a href="/" className="btn btn-primary rounded-pill">
            Go to Home
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
