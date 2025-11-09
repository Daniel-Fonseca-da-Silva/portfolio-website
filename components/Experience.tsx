import { useState } from "react";
import SectiontTitle from "./SectiontTitle";
import GtGroup from "./works/GtGroup";
import Equiplano from "./works/Equiplano";
import MzTech from "./works/MzTech";
import Wlabs from "./works/Wlabs";
import Exosfera from "./works/Exosfera";
import LeroyMerlin from "./works/LeroyMerlin";

const Experience = () => {
  const [workGtGroup, setWorkGtGroup] = useState(false);
  const [workEquiplano, setWorkEquiplano] = useState(false);
  const [workMzTech, setWorkMzTech] = useState(false);
  const [workWlabs, setWorkWlabs] = useState(false);
  const [workExosfera, setWorkExosfera] = useState(false);
  const [workLeroyMerlin, setWorkLeroyMerlin] = useState(false);

  const handleGtGroup = () => {
    setWorkGtGroup(true);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkWlabs(false);
    setWorkExosfera(false);
    setWorkLeroyMerlin(false);
  };

  const handleEquiplano = () => {
    setWorkGtGroup(false);
    setWorkEquiplano(true);
    setWorkMzTech(false);
    setWorkWlabs(false);
    setWorkExosfera(false);
    setWorkLeroyMerlin(false);
  };

  const handleMzTech = () => {
    setWorkGtGroup(false);
    setWorkEquiplano(false);
    setWorkMzTech(true);
    setWorkWlabs(false);
    setWorkExosfera(false);
    setWorkLeroyMerlin(false);
  };

  const handleWlabs = () => {
    setWorkGtGroup(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkWlabs(true);
    setWorkExosfera(false);
    setWorkLeroyMerlin(false);
  };

  const handleExosfera = () => {
    setWorkGtGroup(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkWlabs(false);
    setWorkExosfera(true);
    setWorkLeroyMerlin(false);
  };

  const handleLeroyMerlin = () => {
    setWorkGtGroup(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkWlabs(false);
    setWorkExosfera(false);
    setWorkLeroyMerlin(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-8 sm:py-10 md:py-16 lg:py-24 px-4 sm:px-6"
    >
      <SectiontTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="flex divide-x overflow-x-auto md:overflow-visible">
          <div className="w-full md:w-1/2 p-2 sm:p-4 min-w-[200px] md:min-w-0">
            <ul className="w-full md:w-32 flex flex-row md:flex-col gap-0">
              <li
                onClick={handleLeroyMerlin}
                className={`${
                  workLeroyMerlin
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-[#112240] py-2 sm:py-3 text-xs sm:text-sm cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap`}
              >
                LeroyMerlin
              </li>
              <li
                onClick={handleGtGroup}
                className={`${
                  workGtGroup
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-[#112240] py-2 sm:py-3 text-xs sm:text-sm cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap`}
              >
                GtGroup
              </li>
              <li
                onClick={handleExosfera}
                className={`${
                  workExosfera
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-[#112240] py-2 sm:py-3 text-xs sm:text-sm cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap`}
              >
                Exosfera
              </li>
              <li
                onClick={handleEquiplano}
                className={`${
                  workEquiplano
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-[#112240] py-2 sm:py-3 text-xs sm:text-sm cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap`}
              >
                Equiplano
              </li>
              <li
                onClick={handleWlabs}
                className={`${
                  workWlabs
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-[#112240] py-2 sm:py-3 text-xs sm:text-sm cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap`}
              >
                WLabs
              </li>
              <li
                onClick={handleMzTech}
                className={`${
                  workMzTech
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-[#112240] py-2 sm:py-3 text-xs sm:text-sm cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap`}
              >
                MzTech
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-2 sm:p-4 mt-4 md:mt-0">
            {workLeroyMerlin && <LeroyMerlin />}
            {workGtGroup && <GtGroup />}
            {workExosfera && <Exosfera />}
            {workEquiplano && <Equiplano />}
            {workWlabs && <Wlabs />}
            {workMzTech && <MzTech />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
