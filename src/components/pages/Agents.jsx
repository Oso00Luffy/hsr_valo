import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles, { layout } from "../../style";
import agent1Image from "../../assets/moze.png"; // Import the image
import agent2Image from "../../assets/moze.png"; // Import more images as needed

const agentsData = [
  {
    uuid: "agent1",
    displayName: "Moze",
    image: agent1Image, // Add the imported image to the agent data
  },
  {
    uuid: "agent2",
    displayName: "Agent Two",
    image: agent2Image, // Add more images
  },
  // Add more agents with their images
];

const Agents = () => {
  const [agents] = React.useState(agentsData);
  const navigate = useNavigate();

  return (
    <>
      <section className="relative flex items-center justify-center h-screen sm:h-[85vh] h-[60vh] sm:overflow-hidden w-[100vw] sm:px-[5%] px-0">
        <div className={`relative flex items-end justify-center flex-col w-full h-full`}>
          <div className={`relative flex md:flex-row-reverse flex-col-reverse justify-end items-center`}>
            <div className={`${layout.sectionInfo} relative md:mr-16 max-w-[16rem]`}>
              <div className="relative m-width-[25%] pb-10 border-b border-gray-500 sm:block hidden">
                <h5 className="font-semibold text-secondary mb-8">// CHECK THE HEADCOUNT</h5>
                <span className="text-white">
                  Find more ways to plant the Spike and style on your enemies with scrappers, strategists, and hunters of every description.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 overflow-x-scroll sm:h-[100vh] h-[8rem] w-auto px-2 w-[56vw] no-scrollbar cursor-scroll sm:block hidden">
            <ul className="pl-10 cursor-pointer">
              {agents.map((agent, index) => (
                <li key={agent.uuid} className="relative">
                  <Link to={`/agent/${agent.displayName}`}>
                    <span className="font-bold text-secondary absolute left-[-1.5rem] top-[0.5rem]">
                      {index + 1}
                    </span>
                    <h2 className="relative font-bold text-secondary mb-8 sm:text-[6rem] text-[3rem] leading-none my-0 leading-[0.86] hover:pl-[1rem] transition-all ease-in duration-300 uppercase">
                      {agent.displayName}
                    </h2>
                    <img
                      src={agent.image} // Use the imported image
                      alt={agent.displayName}
                      className="w-[72px] h-[72px] object-cover"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src="https://playvalorant.com/assets/images/agents-background.jpg"
          alt="agents"
          className="absolute z-[-1] sm:w-[100vw] h-full object-cover"
        />
        <img
          src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
          alt="agents"
          className="absolute w-[60vw] min-w-[600px] max-w-[800px] h-auto object-cover bottom-[-8rem]"
        />
      </section>
      <div className={`${layout.sectionReverse} block sm:hidden mt-20 relative`}>
        <div className={`${styles.paddingX}`}>
          <div className="relative m-width-[25%] pb-10 border-b border-gray-500">
            <h5 className="font-semibold text-black mb-8">// CHECK THE HEADCOUNT</h5>
            <span className="text-shadow">
              Find more ways to plant the Spike and style on your enemies with scrappers, strategists, and hunters of every description.
            </span>
          </div>
          <div className="flex justify-center p-4 relative">
            <select
              name="agent"
              id="agent"
              onChange={(e) => {
                navigate(`/agent/${e.target.value}`);
              }}
            >
              <option value="">SELECT AN AGENT</option>
              {agents.map((agent) => (
                <option key={agent.uuid} value={agent.displayName}>
                  {agent.displayName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agents;
