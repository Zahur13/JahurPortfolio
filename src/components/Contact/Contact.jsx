import React from "react";
import "./Contact.css";
import Mail from "../../assets/mail.png";
import Call from "../../assets/call.png";
import Location from "../../assets/location.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "20dbe4d1-6626-4b3c-b312-355fcbf99452");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <div className="theme-pattern1"></div>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects,so feel free to send
            me a message about anything taht you want me to work on.You can
            contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={Mail} alt="" />
              <p>zbshaikh****@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={Call} alt="" />
              <p>+91 74832 *****</p>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="" />
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter you message"
          ></textarea>
          <button className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
