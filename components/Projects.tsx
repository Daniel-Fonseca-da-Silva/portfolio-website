import { dafonImg, dentalImg, spaceImg } from "@/public/assets";
import SectiontTitle from "./SectiontTitle";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsGlobeAmericas } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectiontTitle title="Projects created" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Frontend Project
              </p>
              <h3 className="text-2xl font-bold">Space Discovery Next Site</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Modern template built with Next.js, Tailwind CSS, and I18N internationalization, designed as a foundation for creating professional landing pages for space exploration companies.
              </p>
              <ul className="text-sm md:text-sm font-titleFont sm:text-xs tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Astronomy</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Frontend Project
              </p>
              <h3 className="text-2xl font-bold">Dental Care White</h3>
              <p className="bg-[#112240] text-sm md:text-base xl:-mr-16  p-2 md:p-6 rounded-md">
                Site Created for a dental clinic, with the goal of offering a modern and easy-to-use website, with online appointment scheduling and consultation scheduling features.
              </p>
              <ul className="text-sm md:text-sm font-titleFont sm:text-xs tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Clinic</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Frontend Project
              </p>
              <h3 className="text-2xl font-bold">Dafon</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Customized system developed for companies and organizations of different sizes, using the most efficient and modern technologies in the market. Based on JavaScript with cloud architecture to optimize business processes.
              </p>
              <ul className="text-sm md:text-sm font-titleFont sm:text-xs tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Business Site</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
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
