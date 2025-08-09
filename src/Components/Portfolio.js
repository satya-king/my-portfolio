import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import Contact from "./Contact"; // Import Contact component

function Portfolio() {
    return (
        <>
            <header>
                <a href="#home" className="logo">Satya</a>
                <nav>
                    <a href="#home" className="active">Home</a>
                    <a href="#services">Services</a>
                    <a href="#skills">Skills</a>
                    <a href="#education">Education</a>
                    <a href="#experience">Experience</a>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Contact
                    </a>

                </nav>
            </header>

            <section className="home" id="home">
                <div className="home-img">
                    <img src="Sprofile.jpg" alt="Profile" />
                </div>
                <div className="home-content">
                    <h1>Hi, It's <span>Satya</span></h1>
                    <h3 className="typing-text">I'm a <span></span></h3>
                    <p>
                        I’m a full stack developer who works mostly with <strong>Java, Spring Boot</strong> on the backend
                        and <strong>React.js</strong> on the frontend.
                        I like building applications that actually solve problems and make things easier for people.
                        Over time, I’ve worked on everything from APIs and database design to making smooth, responsive
                        user interfaces, and I’m always looking to learn something new.
                    </p>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/satyanarayana-padhi/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/satya-king" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://leetcode.com/u/satya_243/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                alt="LeetCode"
                                style={{ width: "24px", height: "24px" }}
                            />
                        </a>
                        <a href="mailto:satyanarayanapadhi2002@gmail.com"><FaEnvelope /></a>
                    </div>

                    <a href="#" className="btn">Hire me</a>
                </div>
            </section>

            <Contact />
        </>
    );
}

export default Portfolio;
