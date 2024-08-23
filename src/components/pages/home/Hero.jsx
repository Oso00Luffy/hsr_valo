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
          />
        </div>
      </div>
      <button className="btn">
        <span className="btn__inner">
          <span className="btn__slide"></span>
          <span className="btn__content">PLAY NOW</span>
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
        src="https://rr4---sn-0opoxu-9gve.googlevideo.com/videoplayback?expire=1724412542&ei=Hh7IZpW_I9qrybgP-NC34Qc&ip=2806%3A103e%3A27%3A7e10%3Aac22%3A30c5%3Ac897%3A1ac&id=o-AES29FKddQT6Ki61lV1vY6SD9P9mJAbvHp9LKxNw3vVL&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Vm&mm=31%2C29&mn=sn-0opoxu-9gve%2Csn-9gv7zn7e&ms=au%2Crdu&mv=m&mvi=4&pcm2cms=yes&pl=48&initcwndbps=1032500&bui=AQmm2eyeVZ0OKvorCsUoiRmpruu8XEdo2Kz7hncv-wPnsGO2ZoHziB8SptOLormWgQHhTmKCH5uDz5E2&spc=Mv1m9uk_IYJDIzXGalI-1Uv1nS59qFQslvdCZKt9mBt45vd3ZXYQXMM&vprv=1&svpuc=1&mime=video%2Fmp4&ns=26BRYl11V2KpvijkhSFjInUQ&rqh=1&gir=yes&clen=7869706&ratebypass=yes&dur=96.873&lmt=1724195598227613&mt=1724390458&fvip=3&c=WEB_CREATOR&sefc=1&txp=5538434&n=hlNugl93_JuTSQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAPfNfgsZtTRZDxfACTDwG7zrceyPcye5LPu3apAewbzaAiA0Orpdg0jkS8l3snCR9g0j0h2nSJ0V_GcRagX7QOnf-g%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRgIhAKceBH1DFZooJeoRaeZlNoVICeUNChymiZEqih7N9ZRpAiEA7P2H4y54v5ATXEk0UKP6YrhTx_qaptNsjS8EGqDp_k8%3D&title=Honkai%20Star%20Rail%20x%20Fate%20Stay%20Night%20-%20Official%20Collab%20Reveal%20Trailer%20%7C%20gamescom%202024"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default Hero;
