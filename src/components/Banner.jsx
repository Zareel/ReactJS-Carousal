import React from "react";
import Slider from "react-slick";
import img11 from "../../public/images/img11.jpg";
import img22 from "../../public/images/img22.jpg";
import img33 from "../../public/images/img33.jpg";
import img44 from "../../public/images/img44.jpg";
import img55 from "../../public/images/img55.jpg";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="bg-stone-800 relative h-150 md:h-screen">
          <img
            src={img11}
            alt="img1"
            className="w-full h-150 md:h-screen absolute mix-blend-overlay"
          />
          <div className="absolute w-full flex flex-col justify-center h-150 gap-6">
            <h1 className="text-white font-main text-5xl font-bold text-center w-full">Courage to Lead, Wisdom to Serve</h1>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">Respect, Compassion, Ideas, Vision, integrity... </p>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">The best leaders create a vision and help others achieve it.</p>
          </div>
        </div>
        <div className="bg-stone-800 relative h-150 md:h-screen">
          <img src={img22} alt="img22" className="w-full h-150 md:h-screen absolute mix-blend-overlay" />
          <div className="absolute w-full flex flex-col justify-center h-150 gap-6">
            <h1 className="text-white font-main text-5xl font-bold text-center w-full">Courage to Lead, Wisdom to Serve</h1>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">Respect, Compassion, Ideas, Vision, integrity... </p>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">The best leaders create a vision and help others achieve it.</p>
          </div>
        </div>
        <div className="bg-stone-800 relative h-150 md:h-screen">
          <img src={img33} alt="img33" className="w-full h-150 md:h-screen absolute mix-blend-overlay" />
          <div className="absolute w-full flex flex-col justify-center h-150 gap-6">
            <h1 className="text-white font-main text-5xl font-bold text-center w-full">Courage to Lead, Wisdom to Serve</h1>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">Respect, Compassion, Ideas, Vision, integrity... </p>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">The best leaders create a vision and help others achieve it.</p>
          </div>
        </div>
        <div className="bg-stone-800 relative h-150 md:h-screen">
          <img src={img44} alt="img44" className="w-full h-150 md:h-screen absolute mix-blend-overlay" />
          <div className="absolute w-full flex flex-col justify-center h-150 gap-6">
            <h1 className="text-white font-main text-5xl font-bold text-center w-full">Courage to Lead, Wisdom to Serve</h1>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">Respect, Compassion, Ideas, Vision, integrity... </p>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">The best leaders create a vision and help others achieve it.</p>
          </div>
        </div>
        <div className="bg-stone-800 relative h-150 md:h-screen">
          <img src={img55} alt="img55" className="w-full h-150 md:h-screen absolute mix-blend-overlay" />
        <div className="absolute w-full flex flex-col justify-center h-150 gap-6">
            <h1 className="text-white font-main text-5xl font-bold text-center w-full">Courage to Lead, Wisdom to Serve</h1>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">Respect, Compassion, Ideas, Vision, integrity... </p>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">The best leaders create a vision and help others achieve it.</p>
          </div>
        </div>
        <div className="bg-stone-800 relative h-150 md:h-screen">
          <img src={img33} alt="img33" className="w-full h-150 md:h-screen absolute mix-blend-overlay" />
         <div className="absolute w-full flex flex-col justify-center h-150 gap-6">
            <h1 className="text-white font-main text-5xl font-bold text-center w-full">Courage to Lead, Wisdom to Serve</h1>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">Respect, Compassion, Ideas, Vision, integrity... </p>
            <p className="text-white font-cursive text-3xl md:text-5xl px-2 font-bold text-center w-full">The best leaders create a vision and help others achieve it.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
