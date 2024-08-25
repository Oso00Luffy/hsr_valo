import styles, { layout } from "../../../style";

const Overview = () => (
  <div className={` bg-secondary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth} ${styles.paddingY}`}>
      <section id="about" className="relative">
        <div className="relative">
          <h1 className="pt-8 relative">
            <div className="relative md:px-16 md:py-4 p-0 m-0  font-bold md:text-[80px] text-[44px] text-black md:pb-10">
              عزز إمكانياتك وانضم لنا
            </div>
          </h1>
          <div className={`relative flex md:flex-row flex-col md:py-8 py-0`}>
            <div className={`${layout.sectionInfo} relative`}>
              <div className="relative md:ml-[16%] m-width-[25%] ml-0 md:mb-8 md:py-0 py-4 md:px-16">
                <h5 className="font-semibold text-black mb-8">
                  تخطّى التوقعات
                </h5>
                <span className="text-shadow">
                  .تعال وشاركنا في قناتنا الخاصة لتتشارك آخر أحداث هونكاي ستار ريل, بالإضافة إلى العديد من الفعاليات والأمور المسلّية
                </span>
                <div className=" md:flex-start flex md:justify-start justify-center">
                  <button className="btn mt-16">
                    <span className="btn__inner">
                      <span className="btn__slide"></span>
                      <span className="btn__content text-secondary">
                        LEARN THE GAME
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={`${layout.sectionImg}`}>
              <video
                autoPlay
                loop
                muted
                className="w-[100%] h-[100%] relative"
              >
                <source
                  src="https://cdn.discordapp.com/attachments/623877027086336010/1277202681865437215/555555555.mp4?ex=66cc4f30&is=66cafdb0&hm=6b0bf8480ed47d972f0ed2c0440ac1d30cc9e31e5d9281b3ca03a39843cf60aa&"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Overview;
