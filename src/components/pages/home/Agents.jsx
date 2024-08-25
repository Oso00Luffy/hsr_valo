import { Link } from "react-router-dom";
import styles, { layout } from "../../../style";

const Agents = () => (
  <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <section id="agents" className={`${layout.section} relative`}>
        <div
          className={`relative flex md:flex-row-reverse flex-col md:py-8 py-0`}
        >
          <div className={`${layout.sectionInfo} relative md:mr-16`}>
            <div className="relative m-width-[25%]">
              <h1 className="pt-8 relative">
                <div className="relative font-bold md:text-[80px] text-[44px] text-secondary  leading-[4rem] md:my-10">
                  الشخصيات
                </div>
              </h1>
              <h5 className="font-semibold text-secondary mb-8">
                سلاحك الأعظم هو إبداعك
              </h5>
              <span className="text-white">
               ستقوم بتجميع فريق من المستكشفين مجهزين بقدرات تكيفية وسريعة وقوية تقلب موازين المعركة لصالحك. لا يوجد مستكشفان متماثلان، كما أن نتائج المعارك لن تكون متشابهة أبدًا.
              </span>
              <div className=" md:flex-start flex md:justify-start justify-center">
                <Link to="/agents">
                  <button className="btn mt-16 btn--light">
                    <span className="btn__inner">
                      <span className="btn__slide"></span>
                      <span className="btn__content text-secondary">
                        أظهر جميع الشخصيات
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`flex ${styles.flexCenter} relative`}>
            <div
              className={`flex ${styles.flexCenter} relative w-[100%] h-[100%]`}
            >
              <img
                 src="https://i.imgur.com/WpK3RIW.png"
                alt="hsr"
                className="w-[100%] h-[100%] relative"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Agents;
