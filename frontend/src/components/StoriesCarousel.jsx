import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; // ✅ Swiper v11 import
import "swiper/css";
import "swiper/css/navigation";
import "./StoriesCarousel.css";

const stories = [
  { id: 1, img: "/images/story1.jpg", name: "Ainsley Cook", text: "I've experienced the intense stress that comes with the IB..." , isVideo: false },
  { id: 2, img: "/images/story2.jpg", name: "Video Testimonial", text: "Watch how Nail IB transformed my IB journey!", isVideo: true },
  { id: 3, img: "/images/story3.jpg", name: "Jasmine", text: "Nail IB, the indispensable study partner every student needs!", isVideo: false },
  { id: 4, img: "/images/story4.jpg", name: "Alex", text: "The resources gave me the confidence to achieve my academic goals!", isVideo: false },
];

const StoriesCarousel = () => {
  return (
    <section className="stories-carousel">
      <h2 className="carousel-title">REAL STORIES, REAL IMPACT</h2>
      <p className="carousel-subtitle">
        Hear firsthand how our video tutorials and study resources transformed lives and empowered academic success.
      </p>

      <div className="carousel-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
        >
          {stories.map(story => (
            <SwiperSlide key={story.id}>
              <div className="story-card">
                <div className="story-image-wrapper">
                  <img src={story.img} alt={story.name} className="story-image" />
                  {story.isVideo && (
                    <button className="play-button" aria-label="Play testimonial">▶</button>
                  )}
                </div>
                <p className="story-text">{story.text}</p>
                <h4 className="story-name">{story.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StoriesCarousel;
