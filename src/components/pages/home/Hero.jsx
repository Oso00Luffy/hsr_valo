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
        src="https://cdn.discordapp.com/attachments/623877027086336010/1277200842256154624/Gamescom_Exhibition_Tales_of_the_Luofu_A_New_Chapter__Honkai_Star_Rail.mp4?ex=66d4df3a&is=66d38dba&hm=61e337f4fae3d50a26fdfb979615cd0774b3a8938481498a26c7e2e65d54998f&"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default Hero;
