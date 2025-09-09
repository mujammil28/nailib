import React from "react";
import "./GuidePromo.css";

const GuidePromo = () => {
  return (
    <section className="guide-promo">
      <div className="guide-content">
        {/* Left Side - Book Image */}
        <div className="guide-image">
          <img
            src="https://cdn.nailib.com/_next/static/media/ib-extended-essay.29cf5a02.png?w=828&q=75"
            alt="5 Amazing Extended Essay Tips"
          />
        </div>

        {/* Right Side - Text & Form */}
        <div className="guide-text">
          <h2>
            A GUIDE THAT WILL HELP YOU GET AN{" "}
            <span className="highlight">EASY ‘A’ IN YOUR EXTENDED ESSAY!</span>
          </h2>
          <p>
            This FREE guide reveals the most powerful information for boosting
            your extended essay score and opening the floodgates to that sweet
            45! Get for free what others have paid $100’s in tuition classes to
            learn/preach!
          </p>

          <form className="guide-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <button type="submit">SEND MY FREE GUIDE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GuidePromo;
