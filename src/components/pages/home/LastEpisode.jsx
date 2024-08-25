import { overviewimg } from "../../../assets/index";
import styles from "../../../style";

const LastEpisode = () => (
  <section
    id="overview"
    className="relative flex items-center justify-center h-screen h-full overflow-hidden h-[100vh]"
  >
    <div
      className={`relative flex items-center justify-end flex-col px-[5%] py-[4rem] w-full h-full ${styles.boxWidth}`}
    >
      <div className="relative my-10 sm:ml-4 w-full py-4">
        <div className="my-14">
          <h6 className="font-bold text-[20px] text-left text-secondary tracking-[6px]">
            Character Builds
          </h6>
          <h1 className="font-bold sm:text-[80px] text-[44px] text-secondary">
          اختر من تريد و اسطع بين النجوم
          </h1>
        </div>
        <Link to="/agents">
  <button className="btn">
    <span className="btn__inner">
      <span className="btn__slide"></span>
      <span className="btn__content text-secondary">بناء الشخصيات</span>
    </span>
  </button>
</Link>
      </div>
    </div>
    <img
      src={overviewimg}
      className="absolute t-0 w-auto h-full min-w-full min-h-full max-w-none z-[-1]"
      alt="overview"
    />
  </section>
);

export default LastEpisode;
