import React from "react";
import styles from "../../../style";
import { trailer, valoranttext } from "../../../assets/index";

const Hero = () => (
  <section
    id="hero"
    className="relative flex items-center justify-center h-screen overflow-hidden min-h-[490px] h-[36vh]"
  >
    <div
      className={`relative flex items-center justify-center flex-col px-[5%] py-[4rem] w-full h-full`}
    >
      <div className="sm:py-10 py-0 flex items-center justify-between sm:flex-col flex-col-reverse mb-auto">
        <h6 className="text-white font-semibold mt-4 text-center sm:mb-10">
        بينما تتصاعد مجرة من النجوم، تتحول ابتسامتها البريئة إلى زهرة من البراءة، تمامًا كألوان الغسق المتدرجة التي تتناثر في السماء
        </h6>
      </div>
      <a
        href="https://t.me/HonkaiStarRailAR"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="btn__inner">
          <span className="btn__slide"></span>
          <span className="btn__content">أدخل قناتنا الآن</span>
        </span>
      </a>
    </div>
    <video
      autoPlay
      loop
      muted
      className="absolute z-[-1] w-auto min-w-full min-h-full max-w-none"
    >
      <source
        src="assets/trailer.mp4"
        type="video/mp4"
      />  
      Your browser does not support the video tag.
    </video>
  </section>
);

export default Hero;
