import styles, { layout } from "../../style";
import React, { useState } from "react";

const mapsData = [
  {
    uuid: "map1",
    displayName: "محطة هيرتا الفضائية",
    splash: "https://img.game8.co/3667121/c61441dcc994b6216a0ee62f0094c65f.png/show",
    description: "محطة هرتا هي محطة فضائية تدور حول نجم بعيد، وتعتبر مركزًا للأبحاث العلمية والتكنولوجيا المتقدمة. تحتوي المحطة على مختبرات متطورة وأجهزة تكنولوجية حديثة."

  },
  {
    uuid: "map2",
    displayName: "ياريلو - VI",
    splash: "https://img.game8.co/3667123/6831949b6e5761eb7c34154403b06036.png/show",
    description: "شيانزو لو هو كوكب مليء بالتراث الثقافي والروحاني. يتميز بهندسة معمارية مستوحاة من الأساطير الصينية والشرقية، مع حدائق مليئة بالأزهار والأنهار المتدفقة التي تضفي شعوراً بالسلام والهدوء."
  },
  {
    uuid: "map3",
    displayName: "شيانجو لوفو",
    splash: "https://img.game8.co/3667122/eb32f877f9037aa7079179e54caad73e.png/show",
    description: "بيناكوني هو كوكب مليء بالحياة البرية النابضة بالألوان، مع غابات كثيفة ومناطق شاسعة من النباتات الغريبة. يعكس تنوع البيئة الحيوية على هذا الكوكب."
  },
  {
    uuid: "map4",
    displayName: "بيناكوني",
    splash: "https://img.game8.co/3827826/4e93edda70f1752d1ac0fcb8bf6fc1a4.png/show",
    description: "ياريلو-السادس هو كوكب بارد مغطى بالجليد، حيث يسود الشتاء الدائم بسبب بعده عن شمسه. سطح الكوكب مغطى في الغالب بالثلوج والجليد، مع مناظر طبيعية قاسية ومجمدة تهيمن على التضاريس."
  },
  // Add more maps as needed
];

const Maps = () => {
  const [maps] = useState(mapsData); // Use the hardcoded maps data
  const [mapIndex, setMapIndex] = useState(0);

  if (!maps.length) return null;

  return (
    <div className="relative bg-secondary sm:p-4">
      <section id="maps" className={`${styles.paddingX}`}>
        <h1 className="absolute font-bold sm:text-[6rem] text-[3rem] z-[5]">
          MAPS
        </h1>
        <div className={`${layout.sectionReverse}`}>
          <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2} text-primary`}>
              {maps[mapIndex].displayName}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-shadow`}>
              {maps[mapIndex].description}
            </p>
            <div className="dots flex">
              <ul className="flex py-4 my-2">
                {maps.map((map, index) => (
                  <li
                    key={map.uuid}
                    onClick={() => setMapIndex(index)}
                    className={`dot hover:bg-primary bg-red ${index ? "ml-2" : ""} ${index === mapIndex ? "bg-primary" : "bg-red"}`}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`relative ${layout.sectionImgReverse}`}>
            <img
              src={maps[mapIndex].splash}
              alt={maps[mapIndex].displayName}
              className="w-[100%] h-[100%] relative md:px-4 md:py-8 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maps;