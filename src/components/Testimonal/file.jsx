import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StarRating = ({ rating }) => {
  return (
    <div className="flex text-red-500">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 fill-current ${
            index < rating ? "text-red-500" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, showBorder }) => {
  return (
    <div
      className={`bg-white p-[min(3rem,8%)] rounded-lg h-80 mx-2 shadow-xl flex flex-col justify-evenly ${
        showBorder ? "border-t-4 border-red-500" : ""
      }`}
    >
      <p className="text-gray-600 mb-4 text-md font-semibold">{testimonial.text}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
        <div className="text-gray-500 font-bold text-xl">
          {testimonial.company}
        </div>
      </div>
    </div>
  );
};

const Testimonials = ({ testimonials }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="testimonials w-full h-fit py-10">
      <div className="w-[80vw] mx-auto rounded-lg p-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              showBorder={index === activeSlide} // ✅ border only on active slide
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
