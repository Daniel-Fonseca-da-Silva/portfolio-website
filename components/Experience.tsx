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
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectiontTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <div className="flex divide-x">
          <div className="w-1/2 p-4">
            <ul className="md:w-32 flex flex-col">
              <li
                onClick={handleLeroyMerlin}
                className={`${
                  workLeroyMerlin
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                LeroyMerlin
              </li>
              <li
                onClick={handleGtGroup}
                className={`${
                  workGtGroup
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                GtGroup
              </li>
              <li
                onClick={handleExosfera}
                className={`${
                  workExosfera
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                Exosfera
              </li>
              <li
                onClick={handleEquiplano}
                className={`${
                  workEquiplano
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                Equiplano
              </li>
              <li
                onClick={handleWlabs}
                className={`${
                  workWlabs
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                WLabs
              </li>
              <li
                onClick={handleMzTech}
                className={`${
                  workMzTech
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                MzTech
              </li>
            </ul>
          </div>
          <div className="w-1/2 p-4">
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
