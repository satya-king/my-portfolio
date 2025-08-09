import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram, FaEnvelope } from "react-icons/fa6";

function Portfolio() {
    return (
        <>
            <header>
                <a href="#" className="logo">Satya</a>

                <nav>
                    <a href="#" className="active">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Skills</a>
                    <a href="#">Education</a>
                    <a href="#">Experience</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

            <section className="home">
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
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=satyanarayanapadhi2002@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                        {/* <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaInstagram /></a> */}
                    </div>

                    <a href="#" className="btn">Hire me</a>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
