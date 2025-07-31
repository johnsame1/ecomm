import React from "react";
import "./OurClientReviews.css";
import back from "../../assets/backg.png";
import profile from "../../assets/profile.png";
const testimonials = [
  {
    name: "Sarah M",
    role: "Fashion lover & returning customer",
    review:
      "The fabric feels amazing and the fit is just perfect. I’ve never felt more confident in casual wear!",
    rating: 5,
    image: profile,
    background: back,
  },
  {
    name: "Sarah M",
    role: "Fashion lover & returning customer",
    review:
      "The fabric feels amazing and the fit is just perfect. I’ve never felt more confident in casual wear!",
    rating: 5,
    image: profile,
    background: back,
  },
  {
    name: "Sarah M",
    role: "Fashion lover & returning customer",
    review:
      "The fabric feels amazing and the fit is just perfect. I’ve never felt more confident in casual wear!",
    rating: 5,
    image: profile,
    background: back,
  },
];

const OurClientReviews = () => {
  return (
    <div className="testimonials">
      <p className="testimonials-title">TESTIMONIALS</p>
      <h2 className="testimonials-heading">
        Our Client Reviews <span>♡</span>
      </h2>
      <div className="carousel">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="testimonial-card"
            style={{
              backgroundImage: `url(${t.background})`,
            }}
          >
            <div className="testimonial-content">
              <img className="user-img" src={t.image} alt={t.name} />
              <h3>{t.name}</h3>
              <p className="role">{t.role}</p>
              <p className="review">"{t.review}"</p>
              <div className="stars">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClientReviews;
