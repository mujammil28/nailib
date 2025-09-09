import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MultiCardCarousel.css";

const MultiCardCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const cards = [
    { id: 1, title: "Amora Lindsey", desc: "As an IB student, I've experienced the intense pressure and stress that comes with the program. F...",img:"https://spaces-cdn.nailib.com/testimonials/Amora%20Lindsey/ib-student-studying.jpg?w=1920&q=75" },
    { id: 2, title: "Ainsley Cook", desc: "Nail IB, the indispensable study partner every student needs! Speaking from experience, I can confide...",img:"https://spaces-cdn.nailib.com/testimonials/Ainsley%20Cook/ib-student-notes.jpeg?w=1920&q=75" },
    { id: 3, title: "Katie Mills", desc: "Feeling overwhelmed in the IB program is normal, but Nail IB was my guiding light that transformed my...",img:"https://spaces-cdn.nailib.com/testimonials/Katie%20Mills/ib-student-reading-ib-notes.jpeg?w=1920&q=75" },
    { id: 4, title: "Hazel Barnes", desc: "I'm here to share my secret ally during this challenging IB journey: Nail IB has been my lifeline...",img:"https://spaces-cdn.nailib.com/testimonials/Hazel%20Barnes/ib-student-studying.jpg?w=1920&q=75" },
    { id: 5, title: "Erik Briggs", desc: "As a fellow IB student, I wholeheartedly recommend Nail IB! This platform's video tutorials and s...",img:"https://spaces-cdn.nailib.com/testimonials/Erik%20Briggs/ib-student-watching-nail-ib-videos.jpg?w=1920&q=75" },
  ];

  return (
    <div className="multi-carousel-container">
    
      <Carousel responsive={responsive} infinite={false} autoPlay={false}>
        {cards.map((card) => (
          <div className="carousel-card" key={card.id}>
            <img src={card.img} alt={card.title} className="carousel-image" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCardCarousel;
