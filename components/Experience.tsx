import { useState } from "react";
import SectiontTitle from "./SectiontTitle";
import Grownt from "./works/Grownt";
import Equiplano from "./works/Equiplano";
import MzTech from "./works/MzTech";
import Alterdata from "./works/Alterdata";
import ZeroEmissionsWorld from "./works/ZeroEmissionsWorld";
import LeroyMerlin from "./works/LeroyMerlin";
import Meo from "./works/Meo";

const Experience = () => {
  const [workGrownt, setWorkGrownt] = useState(false);
  const [workEquiplano, setWorkEquiplano] = useState(false);
  const [workMzTech, setWorkMzTech] = useState(false);
  const [workAlterdata, setWorkAlterdata] = useState(false);
  const [workZeroEmissionsWorld, setWorkZeroEmissionsWorld] = useState(false);
  const [workLeroyMerlin, setWorkLeroyMerlin] = useState(false);
  const [meo, setMeo] = useState(false);

  const handleMeo = () => {
    setWorkGrownt(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkAlterdata(false);
    setWorkZeroEmissionsWorld(false);
    setWorkLeroyMerlin(false);
    setMeo(true);
  };
  const handleGrownt = () => {
    setWorkGrownt(true);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkAlterdata(false);
    setWorkZeroEmissionsWorld(false);
    setWorkLeroyMerlin(false);
    setMeo(false);
  };

  const handleEquiplano = () => {
    setWorkGrownt(false);
    setWorkEquiplano(true);
    setWorkMzTech(false);
    setWorkAlterdata(false);
    setWorkZeroEmissionsWorld(false);
    setWorkLeroyMerlin(false);
    setMeo(false);
  };

  const handleMzTech = () => {
    setWorkGrownt(false);
    setWorkEquiplano(false);
    setWorkMzTech(true);
    setWorkAlterdata(false);
    setWorkZeroEmissionsWorld(false);
    setWorkLeroyMerlin(false);
    setMeo(false);
  };

  const handleAlterdata = () => {
    setWorkGrownt(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkAlterdata(true);
    setWorkZeroEmissionsWorld(false);
    setWorkLeroyMerlin(false);
    setMeo(false);
  };

  const handleZeroEmissionsWorld = () => {
    setWorkGrownt(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkAlterdata(false);
    setWorkZeroEmissionsWorld(true);
    setWorkLeroyMerlin(false);
    setMeo(false);
  };

  const handleLeroyMerlin = () => {
    setWorkGrownt(false);
    setWorkEquiplano(false);
    setWorkMzTech(false);
    setWorkAlterdata(false);
    setWorkZeroEmissionsWorld(false);
    setWorkLeroyMerlin(true);
    setMeo(false);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-8 sm:py-10 md:py-16 lg:py-24 px-4 sm:px-6"
    >
      <SectiontTitle title="Where I&apos;ve worked" titleNo="02" />
      <div className="w-full mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="w-full md:w-1/2 p-2 sm:p-4 min-w-[200px] md:min-w-0 overflow-x-auto md:overflow-visible">
          <ul className="w-full md:w-32 flex flex-row md:flex-col gap-0">
          <li
              onClick={handleMeo}
              className={`${
                meo
                  ? "border-l-textGreen text-textGreen bg-hoverColor"
                  : "border-l-textDark/30 text-textDark"
              } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-hoverColor py-3 sm:py-4 text-sm sm:text-base cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap transition-all`}
            >
              Meo
            </li>
            <li
              onClick={handleLeroyMerlin}
              className={`${
                workLeroyMerlin
                  ? "border-l-textGreen text-textGreen bg-hoverColor"
                  : "border-l-textDark/30 text-textDark"
              } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-hoverColor py-3 sm:py-4 text-sm sm:text-base cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap transition-all`}
            >
              LeroyMerlin
            </li>
            <li
              onClick={handleGrownt}
              className={`${
                workGrownt
                  ? "border-l-textGreen text-textGreen bg-hoverColor"
                  : "border-l-textDark/30 text-textDark"
              } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-hoverColor py-3 sm:py-4 text-sm sm:text-base cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap transition-all`}
            >
              Grownt
            </li>
            <li
              onClick={handleZeroEmissionsWorld}
              className={`${
                workZeroEmissionsWorld
                  ? "border-l-textGreen text-textGreen bg-hoverColor"
                  : "border-l-textDark/30 text-textDark"
              } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-hoverColor py-3 sm:py-4 text-sm sm:text-base cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap transition-all`}
            >
              Zero Emissions World
            </li>
            <li
              onClick={handleEquiplano}
              className={`${
                workEquiplano
                  ? "border-l-textGreen text-textGreen bg-hoverColor"
                  : "border-l-textDark/30 text-textDark"
              } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-hoverColor py-3 sm:py-4 text-sm sm:text-base cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap transition-all`}
            >
              Equiplano
            </li>
            <li
              onClick={handleAlterdata}
              className={`${
                workAlterdata
                  ? "border-l-textGreen text-textGreen bg-hoverColor"
                  : "border-l-textDark/30 text-textDark"
              } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-hoverColor py-3 sm:py-4 text-sm sm:text-base cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap transition-all`}
            >
              Alterdata
            </li>
            <li
              onClick={handleMzTech}
              className={`${
                workMzTech
                  ? "border-l-textGreen text-textGreen bg-hoverColor"
                  : "border-l-textDark/30 text-textDark"
              } border-l-2 md:border-l-2 border-b-2 md:border-b-0 bg-transparent hover:bg-hoverColor py-3 sm:py-4 text-sm sm:text-base cursor-pointer duration-300 px-4 sm:px-6 md:px-8 font-medium whitespace-nowrap transition-all`}
            >
              MzTech
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-2 sm:p-4 mt-4 md:mt-0">
          {meo && <Meo />}
          {workLeroyMerlin && <LeroyMerlin />}
          {workGrownt && <Grownt />}
          {workZeroEmissionsWorld && <ZeroEmissionsWorld />}
          {workEquiplano && <Equiplano />}
          {workAlterdata && <Alterdata />}
          {workMzTech && <MzTech />}
        </div>
      </div>
    </section>
  );
};

export default Experience;
