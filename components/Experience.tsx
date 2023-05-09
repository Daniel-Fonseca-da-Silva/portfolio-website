import { useState } from "react";
import SectiontTitle from "./SectiontTitle";
import Dafon from "./works/Dafon";
import Equiplano from "./works/Equiplano";
import MzTech from "./works/MzTech";
import Wlabs from "./works/Wlabs";
import Exosfera from "./works/Exosfera";

const Experience = () => {
  const [workDafon, setWorkDafon] = useState(false);
  const [workEquiplano, setWorkEquiplano] = useState(false);
  const [workMzTech, setWorkMzTech] = useState(false);
  const [workWlabs, setWorkWlabs] = useState(false);
  const [workExosfera, setWorkExosfera] = useState(false);

  const handleDafon = () => {
    setWorkDafon(true);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkWlabs(false);
    setWorkExosfera(false);
  };

  const handleEquiplano = () => {
    setWorkDafon(false);
    setWorkEquiplano(true);
    setWorkMzTech(false);
    setWorkWlabs(false);
    setWorkExosfera(false);
  };

  const handleMzTech = () => {
    setWorkDafon(false);
    setWorkEquiplano(false);
    setWorkMzTech(true);
    setWorkWlabs(false);
    setWorkExosfera(false);
  };

  const handleWlabs = () => {
    setWorkDafon(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkWlabs(true);
    setWorkExosfera(false);
  };

  const handleExosfera = () => {
    setWorkDafon(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkWlabs(false);
    setWorkExosfera(true);
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
                onClick={handleDafon}
                className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
              >
                Dafon
              </li>
              <li
                onClick={handleEquiplano}
                className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
              >
                Equiplano
              </li>
              <li
                onClick={handleExosfera}
                className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
              >
                Exosfera
              </li>
              <li
                onClick={handleMzTech}
                className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
              >
                MzTech
              </li>
              <li
                onClick={handleWlabs}
                className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
              >
                WLabs
              </li>
            </ul>
          </div>
          <div className="w-1/2 p-4">
            {workDafon && <Dafon />}
            {workEquiplano && <Equiplano />}
            {workMzTech && <MzTech />}
            {workWlabs && <Wlabs />}
            {workExosfera && <Exosfera />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
