import React from "react";
import styles from "../../../style";
import { valoranttext } from "../../../assets/index";

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
        Amidst a rising galaxy of stars, her unguarded smile dissolves into a bloom of innocence, akin to the layered twilight hues adrift in the sky.
        </h6>
        <div>
          <img
            src="https://cdn2.steamgriddb.com/logo_thumb/804bfd285116c91c935176b2b199894d.png"
            alt="Honkai: Star Rail"
            className="sm:h-[100px] h-[50px]"
          />
        </div>
      </div>
      <button className="btn">
        <span className="btn__inner">
          <span className="btn__slide"></span>
          <span className="btn__content">أدخل قناتنا الآن</span>
        </span>
      </button>
    </div>
    <video
      autoPlay
      loop
      muted
      className="absolute z-[-1] w-auto min-w-full min-h-full max-w-none"
    >
      <source
        src="https://drive.google.com/file/d/1h0YrrJsc_iuqwmXv0EFdW3OKYbT2zK1j/view?usp=sharing"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default Hero;
