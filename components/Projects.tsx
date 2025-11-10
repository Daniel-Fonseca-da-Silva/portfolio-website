import { dafonImg, dentalImg, spaceImg } from "@/public/assets";
import SectiontTitle from "./SectiontTitle";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsGlobeAmericas } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
      <SectiontTitle title="Projects created" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-12 sm:gap-16 md:gap-20 lg:gap-28 mt-6 sm:mt-8 md:mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-28 mt-6 sm:mt-8 md:mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://space-discovery-three.vercel.app"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={spaceImg}
                  alt="Space Discovery"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:justify-between items-start xl:items-end text-left xl:text-right xl:-ml-16 z-10 mt-4 xl:mt-0">
              <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
                Frontend Project
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-2">Space Discovery Next Site</h3>
              <p className="glass text-sm sm:text-base md:text-lg p-4 sm:p-6 md:p-8 rounded-xl leading-relaxed">
              Modern template built with Next.js, Tailwind CSS, and I18N internationalization, designed as a foundation for creating professional landing pages for space exploration companies.
              </p>
              <ul className="text-sm sm:text-base font-titleFont tracking-wide flex flex-wrap gap-3 sm:gap-4 md:gap-5 text-textDark">
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Astronomy</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">NextJS</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">TypeScript</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Tailwind</li>
              </ul>
              <div className="text-xl sm:text-2xl flex gap-3 sm:gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva/Landing-Page-Template-Astronomy"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="http://www.dafon.online/"
                  target="_blank"
                >
                  <BsGlobeAmericas />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.linkedin.com/company/dafon-sistemas"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href=""
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={dentalImg}
                  alt="Dental Care White"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:justify-between items-start xl:items-end text-left xl:text-right z-10 mt-4 xl:mt-0">
              <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
                Frontend Project
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-2">Dental Care White</h3>
              <p className="glass text-sm sm:text-base md:text-lg xl:-mr-16 p-4 sm:p-6 md:p-8 rounded-xl leading-relaxed">
                Site Created for a dental clinic, with the goal of offering a modern and easy-to-use website, with online appointment scheduling and consultation scheduling features.
              </p>
              <ul className="text-sm sm:text-base font-titleFont tracking-wide flex flex-wrap gap-3 sm:gap-4 md:gap-5 text-textDark">
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Clinic</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">NextJS</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">TypeScript</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Tailwind</li>
              </ul>
              <div className="text-xl sm:text-2xl flex gap-3 sm:gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href=""
                  target="_blank"
                >
                  <BsGlobeAmericas />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.linkedin.com/company/dafon-sistemas"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="http://www.dafon.online/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={dafonImg}
                  alt="Dafon"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:justify-between items-start xl:items-end text-left xl:text-right xl:-ml-16 z-10 mt-4 xl:mt-0">
              <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
                Frontend Project
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-2">Dafon</h3>
              <p className="glass text-sm sm:text-base md:text-lg p-4 sm:p-6 md:p-8 rounded-xl leading-relaxed">
                Customized system developed for companies and organizations of different sizes, using the most efficient and modern technologies in the market. Based on JavaScript with cloud architecture to optimize business processes.
              </p>
              <ul className="text-sm sm:text-base font-titleFont tracking-wide flex flex-wrap gap-3 sm:gap-4 md:gap-5 text-textDark">
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Business Site</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">NextJS</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">TypeScript</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Tailwind</li>
              </ul>
              <div className="text-xl sm:text-2xl flex gap-3 sm:gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="http://www.dafon.online/"
                  target="_blank"
                >
                  <BsGlobeAmericas />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.linkedin.com/company/dafon-sistemas"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
