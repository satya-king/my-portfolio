import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/contact.css"; // relative path from Components folder

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .send(
                "service_kek1xxa",
                "template_so4gr5n",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                "LYzAPWGYWs-wu7RC_"
            )
            .then(
                () => {
                    setStatus("✅ Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                () => {
                    setStatus("❌ Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <p style={{ fontSize: '18px' }}>Feel free to reach out for collaborations or just a friendly hello 👋</p>
            <br />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>

            {status && <p style={{ marginTop: "10px", color: "green" }}>{status}</p>}
        </section>
    );
}

export default Contact;
